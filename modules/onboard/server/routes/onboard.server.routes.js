'use strict';

/**
 * Module dependencies
 */
var onboard = require('../controllers/onboard.server.controller');

module.exports = function(app) {

  app.route('/api/onboard/getPages').get(onboard.getPages);
  app.route('/api/onboard/getFields').get(onboard.getFields);
  app.route('/api/onboard/getLabels').get(onboard.getLabels);
  app.route('/api/onboard/getSelectOptions').get(onboard.getSelectOptions);
  app.route('/api/onboard/getFormData').get(onboard.getFormData);
  app.route('/api/onboard/updateFormData').post(onboard.updateFormData);
  app.route('/api/onboard/submitFormData').post(onboard.submitFormData);
  
};