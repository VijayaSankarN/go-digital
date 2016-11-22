'use strict';

module.exports = function (app) {
  // User Routes
  var user = require('../controllers/user.server.controller');

  // Setting up the users profile api
  app.route('/api/user/verify').get(user.verify);
  app.route('/api/user/signin').post(user.signin);
  app.route('/api/user/signout').get(user.signout);
};
