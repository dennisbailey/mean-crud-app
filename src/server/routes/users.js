var express = require('express');
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('../../_config');
var Users = require('../models/users');


// Register
router.get('/register', function(req, res, next) {
   // Check and see if the user already exists
   User.findOne({ email: req.body.email }, function(err, user) {
     if (err) { return next(err); }

     if (user) {
       return res.status(409).json({ status: 'fail',
                                     message: 'you already signed up'});
     }
   });

   // Create a new user
   var user = new User(req.body);
   user.save(function() {
     var token = generateToken(user);
     
     // create token
     res.status(200).json({
       status: 'success',
       data: { token: token,
               user: user.email
             }
     });

   });

});


// Login
router.post('/login', function(req, res, next) {
  // Ensure the user exists
  User.findOne({ email: req.body.email }, function(err, user) {
     if (err) { return next(err); }

     if (!user) {
       return res.status(401).json({ status: 'fail',
                                     message: 'email and/or password is incorrect.'});
     }
   });
  
  // Compare the plain text password with the hashed password
  user.comparePassword(req.body.password, function(err, match){
    if (err) { return next(err); }
    
    if(!match) {return res.status(401).json({ status: 'fail',
                                              message: 'email and/or password is incorrect.'});
    }
    
    user = user.toObject();
    // delete user.password;
    var token = generateToken(user);
    
    res.status(200).json({ status: 'success',
                           data: { token: token,
                                   user: user } 
    });    
  
  });
  
});


// Logout
router.get('/logout', function(req, res, next) {


});

// *** Helpers *** //
// Generate token
function generateToken(user) {
  var payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user._id
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

module.exports = router;
