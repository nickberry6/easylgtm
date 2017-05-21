var auth = require('express').Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

auth.route('/')
  .post(function(req, res) {
    User.findOne({ name: req.body.name}, function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'User not found.' });
      } else if (user) {
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Invalid password.' });
        } else {
          var token = jwt.sign(user, config.secret, {
            expiresIn: 60*60*24 // 24 hours
          });
          res.json({
            success: true,
            message: 'Here have this token',
            token: token
          });
        };
      };
    });
  });

  module.exports = auth;
