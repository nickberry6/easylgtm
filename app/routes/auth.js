var auth = require('express').Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

auth.route('/')
  .post(function(req, res) {
    User.findOne({ username: req.body.username}, function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({
          success: false,
          message: 'User not found.'
        });
      } else if (user) {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          if (!isMatch) {
            res.json({
              success: false,
              message: 'Invalid password.'
            });
          } else {
            var token = jwt.sign(user, config.secret, {
              expiresIn: 60*60*24 // 24 hours
            });
            res.json({
              success: true,
              message: 'Here have this token',
              token: token,
              username: user.username
            });
          };
        });
      };
    });
  });

  module.exports = auth;
