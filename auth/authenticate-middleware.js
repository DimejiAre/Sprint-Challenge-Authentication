const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if(token){
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decodedToken) => {
        if(err){
          res.status(401).json({ message: 'You shall not pass! You are not authorized' + err.message });
        } else {
          req.decodedToken = decodedToken
          next()
        }
      })
  } else {
    res.status(401).json({ message: 'Provide login credentials' });
  }
  
};
