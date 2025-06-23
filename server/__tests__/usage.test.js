const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Project = require('../models/Project');
const Limit = require('../models/Limit');
const Usage = require('../models/Usage');
const { generateRandomString } = require('../utils/generateKeys');

jest.setTimeout(180000);

describe('Usage API', () => {
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
      .get(`/api/usage/${projectId}`)
      .set('x-api-key', apiKey);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/No rate limit set/);
  });

  it('should return usage stats', async () => {
    await Limit.create({ projectId, limit: 2, window: 'hour' });
    // Simulate usage
    await Usage.create({ projectId, timestamp: new Date(), count: 1 });
    const res = await request(app)
      .get(`/api/usage/${projectId}`)
      .set('x-api-key', apiKey);
    expect(res.statusCode).toBe(200);
    expect(res.body.used).toBe(1);
    expect(res.body.remaining).toBe(1);
    expect(res.body.resetIn).toBeGreaterThan(0);
  });

  it('should return 401 for missing API key', async () => {
    const res = await request(app)
      .get(`/api/usage/${projectId}`);
    expect(res.statusCode).toBe(401);
  });
}); 