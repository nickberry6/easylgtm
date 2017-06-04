var setup = require('express').Router();
var User = require('../models/user');

setup.route('/')
  .get(function(req, res) {
    var nick = new User({
      firstName: 'Nick',
      lastName: 'Berry',
      email: 'nicholasberry.13@gmail.com',
      password: 'password',
      admin: true
    });

    nick.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      res.json({ success: true });
    });
  });


module.exports = setup;
