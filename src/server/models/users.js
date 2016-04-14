var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
               type: String,
               required: true
            },
  password: {
               type: String,
               required: true
            }, 
  admin:     {
               type: Boolean,
               default: false
            }
});

var User = mongoose.model('user', UserSchema);

module.exports = User;