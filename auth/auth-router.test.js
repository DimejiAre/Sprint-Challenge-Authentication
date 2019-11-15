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

// it('should return jokes', function(done) {
//     request(server)
//     .post('/api/jokes')
//     .send('name=john') // x-www-form-urlencoded upload
//     .set('Accept', 'application/json')
//     .expect(function(res) {
//       res.body.id = 'some fixed id';
//       res.body.name = res.body.name.toLowerCase();
//     })
//     .expect(200, {
//       id: 'some fixed id',
//       name: 'john'
//     }, done);
// });