var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var config = require('../../../_config');

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
UserSchema.pre('save', function(next) {

  var user = this;

  // check if the password is new or being modified
  if (!user.isModified('password')) { return next(); }

  // generate a salt
  bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt) {
    if (err) { return next(err); }

    // hash that password
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) { return next(err); }

      // replace the plain text passworkd with the hashed and salted password
      user.password = hash;

      // Continue the middleware journey of discovery
      next();

    });

  });

});

// Password comparison and verification
UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, match) {
    if (err) { return done(err); }
    done(err, match);
  });
};


var User = mongoose.model('user', UserSchema);

module.exports = User;
