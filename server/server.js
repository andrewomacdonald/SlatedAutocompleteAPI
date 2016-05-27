var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
  var port = server.address().port;
  console.log('listening on port' + port);
});

app.use('/', express.static(__dirname + '/../client'));
app.use('/', express.static(__dirname + '/../bower_components'));
