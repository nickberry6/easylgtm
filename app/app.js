var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/test.html');
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
});
