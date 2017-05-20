var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  image: String,
  upvotes: Number,
  downvotes: Number
});

module.exports = mongoose.model('Post', PostSchema);
