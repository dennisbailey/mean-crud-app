var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
               type: String,
               unique: true,
               required: true
            },
  password: {
               type: String,
               required: true
            }, 
  admin:     {
               type: Boolean,
               required: true,
               default: false
            }
});

// Hash the password before saving it to the DB


// Password comparison and verification

var User = mongoose.model('user', UserSchema);

module.exports = User;