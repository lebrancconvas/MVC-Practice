"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./controllers/router.js');
var PORT = 3005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.listen(PORT, function () {
    console.info("Server Listening at PORT: " + PORT + ".");
});
