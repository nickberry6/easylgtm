var users = require('express').Router();
var User = require('../models/user');

users.route('/')
  .get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
          res.send(err);
        };
        res.json(users);
    });
  })
  .post(function(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.admin = req.body.admin;
    user.save(function(err) {
      if (err) {
        res.send(err);
      };
      res.json({ message: 'User created!' });
    });
  });

users.route('/:user_id')
  .get(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if (err) {
          res.send(err);
        };
        res.json(user);
      });
  })
  .put(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if (err) {
          res.send(err);
        };
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.admin = req.body.admin;

        user.save(function(err) {
            if (err) {
              res.send(err);
            };
            res.json({ message: 'User updated!' });
        });
      });
    })
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err) {
              res.send(err);
            };
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = users;