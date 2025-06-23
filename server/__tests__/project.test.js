const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Project = require('../models/Project');

jest.setTimeout(180000);

describe('Project API', () => {
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
    await Project.deleteMany({});
  });

  it('should register a new project', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({ projectName: 'Test Project' });
    expect(res.statusCode).toBe(201);
    expect(res.body.projectId).toBeDefined();
    expect(res.body.apiKey).toBeDefined();
  });

  it('should not register a project without projectName', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({});
    expect(res.statusCode).toBe(400);
  });
}); 