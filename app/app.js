var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

var Post = require('./models/post');

mongoose.connect('mongodb://localhost:27017/lgtm');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

router.route('/posts')
    .post(function(req, res) {

        var post = new Post();
        post.title = req.query.title;  // set the post name (comes from the request)
        post.save(function(err) {
            if (err) {
              res.send(err);
            };

            res.json({ message: 'Post created!' });
        });

    })
    .get(function(req, res) {
    Post.find(function(err, posts) {
        if (err)
            res.send(err);

        res.json(posts);
    });
});

app.use('/', router);

app.listen(port, function () {
  console.log('magic happens on port ' + port);
});
