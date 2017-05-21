var router = require('express').Router();
var posts = require('./posts');
var users = require('./users');
var setup = require('./setup');
var auth = require('./auth');
var verifyToken = require('./middleware/token');

router.use(function(req, res, next) { //middleware for all routes
    console.log(req.method, req.url);
    next();
});

router.use('/posts', posts);
router.use('/', verifyToken);
router.use('/users', users);
router.use('/setup', setup);
router.use('/authenticate', auth);

module.exports = router;
