const request = require('supertest');
const server = require('../api/server/')

describe('jokes endpoint', () => {
    test('the db env is testing', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    test('returns 401 if authorization not provided', async () => {
        const response = await request(server).get('/api/jokes')
        expect(response.status).toBe(401)
    });
  });