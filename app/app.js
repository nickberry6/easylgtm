var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/', router);

app.listen(port, function () {
  console.log('magic happens on port ' + port);
});
