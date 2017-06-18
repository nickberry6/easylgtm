var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, required: true },
  upvotes: Number,
  downvotes: Number
}, {
    versionKey: false
});

module.exports = mongoose.model('Post', PostSchema);
