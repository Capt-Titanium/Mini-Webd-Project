var bodyParser = require("body-parser");
var expressSanitizer = require("express-sanitizer");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

//App Configuration
// ======== //
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
// ======== //

// ROUTES
app.get("/",function(req,res){
    res.render("index");
});

app.get("/about",function(req, res){
    res.render("about");
});

app.post("/index",function(re1,res){
    res.send("Site Under Construction, Incovenience is deeply regretted");
});

//Listening to localhost
app.listen(1000, function(){
    console.log("Server is running");
});
