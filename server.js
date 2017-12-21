// Dependencies
var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

// Create express app instance.
var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//var db = require("./models/burger");

app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");



// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes); 

app.listen(port);

