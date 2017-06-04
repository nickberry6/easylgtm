var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean
}, {
    versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
