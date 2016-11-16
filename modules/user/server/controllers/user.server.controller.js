'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  db = require(path.resolve('./config/lib/sequelize')),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  passport = require('passport');

/**
 * Signin after passport authentication
 */
exports.verify = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {

    if (err || !user) {
      res.status(400).send(info);
    } else {
      req.login(user, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          return res.json(user);
        }
      });
    }
  })(req, res, next);
};

/**
 * Signout
 */
exports.signout = function(req, res) {
  req.logout();

  req.session.destroy(function (err) {
    res.redirect('/');
  });
};
