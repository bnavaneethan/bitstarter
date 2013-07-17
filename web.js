var express = require('express');
var fs = require('fs');
var buf = new Buffer();
var json = JSON.stringify(buf);
var index_file = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString(fs.readFileSync(index_file)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
