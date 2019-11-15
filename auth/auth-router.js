const router = require('express').Router();
const db = require('./auth-model');
const generateToken = require('../helpers/generateToken')

router.post('/register', async (req, res) => {
  try{
    const user = req.body;
    const result = await db.registerUser(user)
    const token = generateToken(result)
    res.status(201).json({message: `welcome ${result.username}`, token: token})
  }
  catch (error){
    res.status(500).json({error: 'An error occurred during registeration'})
  }
  
});

router.post('/login', async (req, res) => {
  try{
    const user = req.body;
    const result = await db.loginUser(user)
    if(result){
      const token = generateToken(result)
      res.status(200).json({message: `welcome ${result.username}`, token: token})
    } else {
      res.status(401).json({message: 'Invalid Credentials'})
    }
  }
  catch(error){
    res.status(500).json({error: 'An error occurred during registeration'})
  }
});

module.exports = router;
