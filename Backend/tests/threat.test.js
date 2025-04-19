const request = require('supertest');
const express = require('express');
const threatRoutes = require('../routes/threatRoutes');
const connectDB = require('../config/db');
const mongoose = require('mongoose');
require('dotenv').config();

let app;
let server;
let token;

beforeAll(async () => {
  app = express();
  app.use(express.json());
  app.use('/api/auth', require('../routes/authRoutes'));
  app.use('/api/threats', threatRoutes);
  server = app.listen(0);

  // connect test DB
  await connectDB();

  // create a test user and get token
  await request(app).post('/api/auth/signup').send({ email: 'test@a.com', password: 'pass123', role: 'analyst' });
  const res = await request(app).post('/api/auth/login').send({ email: 'test@a.com', password: 'pass123' });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
  server.close();
});

describe('Threat CRUD', () => {
  let threatId;

  test('POST /api/threats', async () => {
    const res = await request(app)
      .post('/api/threats')
      .set('Authorization', `Bearer ${token}`)
      .send({ ip_address: '1.2.3.4', domain: 'ex.com', severity: 'high', source: 'Test' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    threatId = res.body._id;
  });

  test('GET /api/threats', async () => {
    const res = await request(app)
      .get('/api/threats')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('PUT /api/threats/:id', async () => {
    const res = await request(app)
      .put(`/api/threats/${threatId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ severity: 'medium' });
    expect(res.statusCode).toBe(200);
    expect(res.body.severity).toBe('medium');
  });

  test('DELETE /api/threats/:id', async () => {
    const res = await request(app)
      .delete(`/api/threats/${threatId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(204);
  });
});