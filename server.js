var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express-handlebars = require("express-handlebars");
var cheerio = require("cheerio");
var request = require("request");
var axios = require("axios");


var PORT = 3000;

var db = require ("./models");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: false}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/scrapedNews", {
  useMongoClient: true
});

app.get("/scrape", function(req,rex) {
  axios.get("https://www.nhl.com/").then(function(error, response, html) {
    var $ = cheerio.load(html);

    var results = [];

    $("h4.headline-link").each(function(i, element) {

        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
            .children("a")
            .attr("href");
  })
})
