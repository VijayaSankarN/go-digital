'use strict';

/**
 * Module dependencies
 */
var dashboard = require('../controllers/dashboard.server.controller');

module.exports = function(app) {

  app.route('/api/dashboard/getForms').get(dashboard.getForms);
  app.route('/api/dashboard/createForm').get(dashboard.createForm);

};