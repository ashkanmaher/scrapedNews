var mongoose = require("mongoose");
var schema = mongoose.Schema;

  var scemaArticle = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
});
