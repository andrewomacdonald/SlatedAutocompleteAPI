var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/client'));
app.post('/', function(request, response){
  response.render(__dirname + 'client/index.html');
})

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
