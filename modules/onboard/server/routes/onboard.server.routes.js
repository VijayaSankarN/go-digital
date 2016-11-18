'use strict';

/**
 * Module dependencies
 */
var onboard = require('../controllers/onboard.server.controller');

module.exports = function(app) {
  // Form collection routes
  app.route('/api/onboard')
    .get(onboard.readFields)
    .post(onboard.create);

  // Single form routes
  app.route('/api/onboard/:formId/:pageId')
    .get(onboard.readFields)
    .get(onboard.read)
    .put(onboard.update)
    .delete(onboard.delete);
};