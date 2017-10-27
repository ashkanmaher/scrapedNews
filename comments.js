var mongoose = require ("mongoose");

var schema = mongoose.schema;

var commentSchema = new Schema({
  message: String
});

var comment = mongoose.model("Comment, commentSchema");

module.exports = comment;
