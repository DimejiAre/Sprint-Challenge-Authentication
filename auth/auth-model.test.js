const Auth = require('./auth-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
    await db('users').truncate()
 })

 describe('login users', ()=>{
     test('logs in correctly', async ()=>{
         await Auth.registerUser({username: 'timi', password:'timi'})
         const response = await Auth.loginUser({username: 'timi', password:'timi'})
         expect(response.username).toBe('timi')
     })
 })

 describe('register users', ()=>{
    test('registers correctly', async ()=>{
        const response = await Auth.registerUser({username: 'timi', password:'timi'})
        expect(response.username).toBe('timi')
    })
})