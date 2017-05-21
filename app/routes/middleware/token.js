var verifyToken = require('express').Router();
var jwt = require('jsonwebtoken');
var config = require('../../config');

verifyToken.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Invalid token.' });
      } else {
        req.decoded = decoded;
        next();
      };
    });

  } else {
    return res.status(403).send({
        success: false,
        message: 'No token.'
    });
  };
});

module.exports = verifyToken;
