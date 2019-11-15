const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser
}

async function registerUser(user){
    user.password = bcrypt.hashSync(user.password)
    let [id] = await db('users').insert(user)
    let result = await db('users').where({id}).select('id', 'username').first()
    return result
}