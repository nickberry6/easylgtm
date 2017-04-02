var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  url: String
});

module.exports = mongoose.model('Post', PostSchema);
