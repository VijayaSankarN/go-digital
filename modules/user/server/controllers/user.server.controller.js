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
 exports.signin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {

    if (err || !user) {
      res.status(400).send(info);
    } else {
      req.login(user, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          var userDetails = {
            userID:user.dataValues.site_user_id,
            username:user.dataValues.username,
            sfid:user.dataValues.sfid
          };
          return res.json(user);
        }
      });
    }
  })(req, res, next);
};

/**
 * Verify users
 */
 exports.verify = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.send({state: 'success', user: req.user});
  } else {
    res.send({state: 'failure', user: null});
  }
};


/**
 * Signout
 */
 exports.signout = function(req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
};
