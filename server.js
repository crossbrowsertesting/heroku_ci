var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + 'public')); //Serves resources from public folder

//get port from heroku and listen on it
var server = app.listen(process.env.port);