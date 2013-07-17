var fs = require('fs');
var express = require('express');
var INDEX_FILE = './index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(INDEX_FILE));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
