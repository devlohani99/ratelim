const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Project = require('../models/Project');
const Limit = require('../models/Limit');
const Usage = require('../models/Usage');
const { generateRandomString } = require('../utils/generateKeys');

jest.setTimeout(180000);

describe('Ratelim API', () => {
  let mongoServer;
  let apiKey, projectId;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  });
  afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer) await mongoServer.stop();
  });
  beforeEach(async () => {
    await Project.deleteMany({});
    await Limit.deleteMany({});
    await Usage.deleteMany({});
    projectId = generateRandomString(12);
    apiKey = generateRandomString(24);
    await Project.create({ projectName: 'Test', projectId, apiKey });
  });

  it('should return error if no limit set', async () => {
    const res = await request(app)
      .post('/api/ratelim')
      .send({ apiKey });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/No rate limit set/);
  });

  it('should allow requests within the limit', async () => {
    await Limit.create({ projectId, limit: 2, window: 'hour' });
    let res = await request(app).post('/api/ratelim').send({ apiKey });
    expect(res.body.allowed).toBe(true);
    res = await request(app).post('/api/ratelim').send({ apiKey });
    expect(res.body.allowed).toBe(true);
  });

  it('should block requests over the limit', async () => {
    await Limit.create({ projectId, limit: 1, window: 'hour' });
    await request(app).post('/api/ratelim').send({ apiKey });
    const res = await request(app).post('/api/ratelim').send({ apiKey });
    expect(res.body.allowed).toBe(false);
    expect(res.body.remaining).toBe(0);
  });

  it('should return error for missing API key', async () => {
    const res = await request(app).post('/api/ratelim').send({});
    expect(res.statusCode).toBe(401);
  });
}); 