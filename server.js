var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var controllers = require("./controllers");
var flash = require("connect-flash");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Opt into Services
//app.use(express.urlencoded());
//app.use(express.cookieParser());
//app.use(express.session({ secret: "dsfdsfdsfdsf" }));
app.use(flash());

// Map the routes
controllers.init(app);



var server = http.createServer(app);

server.listen(3000);
