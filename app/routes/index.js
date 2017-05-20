var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var posts = require('./posts');

router.use(function(req, res, next) {
    // middleware
    console.log(req.method, req.url);
    next();
});

router.use('/posts', posts);

module.exports = router;
