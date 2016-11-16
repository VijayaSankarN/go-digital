'use strict';

module.exports = function (app) {
  // User Routes
  var user = require('../controllers/user.server.controller');

  // Setting up the users profile api
  app.route('/api/user/verify').post(user.verify);
  app.route('/api/user/signout').post(user.signout);
};
