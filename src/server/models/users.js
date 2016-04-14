var mongoose = require('mongoose');
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

var User = mongoose.model('user', UserSchema);

module.exports = User;