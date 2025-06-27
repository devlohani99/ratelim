const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Limit = require('../models/Limit');

jest.setTimeout(180000);

describe('Limit API', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  });
  afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer) await mongoServer.stop();
  });
  afterEach(async () => {
    await Limit.deleteMany({});
  });

  it('should set a rate limit for a project', async () => {
    const res = await request(app)
      .post('/api/limits')
      .send({ projectId: 'testid', limit: 100, window: 'hour' });
    expect(res.statusCode).toBe(200);
    expect(res.body.projectId).toBe('testid');
    expect(res.body.limit).toBe(100);
    expect(res.body.window).toBe('hour');
  });

  it('should not set a limit with missing fields', async () => {
    const res = await request(app)
      .post('/api/limits')
      .send({});
    expect(res.statusCode).toBe(400);
  });
}); 