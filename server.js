// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

//create application/urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json({ type: 'application/++json'}));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({ type: 'text/html'}));

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT function() {
	console.log("app listening on PORT: "+ PORT);
});

