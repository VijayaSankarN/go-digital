'use strict';

/**
 * Module dependencies
 */
var onboard = require('../controllers/onboard.server.controller');

module.exports = function(app) {

  app.route('/api/getPages').get(onboard.getPages);
  app.route('/api/getFields').get(onboard.getFields);
  app.route('/api/getSelectOptions').get(onboard.getSelectOptions);
  
    // .post(onboard.create);

  // Single form routes
  // app.route('/api/onboard/:formId/:pageId')
  //   .get(onboard.readFields)
  //   .get(onboard.read)
  //   .put(onboard.update)
  //   .delete(onboard.delete);
};