var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes/index');
var config = require('./config');

var app = express();
var port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

// app.set('vSecret', config.secret);
mongoose.connect(config.database);

app.listen(port, function () {
  console.log('magic happens on port ' + port);
});
