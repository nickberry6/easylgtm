var setup = require('express').Router();
var User = require('../models/user');

setup.route('/')
  .get(function(req, res) {
    var seed = new User({
      firstName: 'Test',
      lastName: 'User',
      username: 'admin',
      email: 'nicholasberry.13@gmail.com',
      password: 'password',
      admin: true
    });

    seed.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      res.json({ success: true });
    });
  });


module.exports = setup;
