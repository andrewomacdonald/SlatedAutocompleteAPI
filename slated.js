var express = require('express');
var app = express();
var routes = require('./server/server.js');

app.get('/', function(request, response){
  response.render(data);
});
