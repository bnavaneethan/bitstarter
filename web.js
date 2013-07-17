var express = require('express');
var fs = require('fs');
var FILE_DEFAULT = "index.html";
var buf = new Buffer();
var json = JSON.stringify(buf);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send(fs.readFileSync(FILE_DEFAULT));
  response.send(buf.toString(fs.readFileSync(FILE_DEFAULT)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
