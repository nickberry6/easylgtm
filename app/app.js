var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var router = require('./routes/index');

var app = express();
var port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/lgtm');

app.listen(port, function () {
  console.log('magic happens on port ' + port);
});
