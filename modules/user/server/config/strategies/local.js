'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  db = require(path.resolve('./config/lib/sequelize')),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
  // Use local strategy
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    db.User.findOne({
      where: {
        username: username,
        active: true
      }
    })
    .then(function(user) {

      // Authenticate username and password
      if (!user || !user.authenticateUser(user, username)) {
        done(null, false, {
          message: 'Incorrect Username / User Suspended'
        });
        return null;
      } else if (!user || !user.authenticatePass(user, password)) {
        done(null, false, {
          message: 'Incorrect Password'
        });
        return null;
      } 

      done(null, user);

      return null;
    })
    .catch(function(err) {
      done(err);
    });
  }));
};
