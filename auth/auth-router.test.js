const request = require('supertest');
const server = require('../api/server');

describe('register endpont', ()=>{
    test('it returns correct error status code if no data', async ()=>{
        const response = await request(server).post('/api/auth/register')
        expect(response.status).toBe(500)
    })
})

describe('login endpont', ()=>{
    test('it returns correct error status code if no data', async ()=>{
        const response = await request(server).post('/api/auth/login')
        expect(response.status).toBe(500)
    })
})