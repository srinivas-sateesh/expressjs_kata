var express = require('express');
var http = require('http');
var fs = require('fs');
var options = {
  host: 'nitro-kings-landing-183325.nitrousapp.com'
};
var app = express();
console.log(app);
http.createServer(app).listen(8080);
app.get('/', function (req,res) {
  
  res.send('Hello from Express');
});

