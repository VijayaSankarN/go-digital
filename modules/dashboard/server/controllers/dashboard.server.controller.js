'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  db = require(path.resolve('./config/lib/sequelize')),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Get all forms
 */
exports.getForms = function(req, res) {
  
  var userId = req.query.userId;

  db.onboard_form_submission_listOnly.findAll({
    where: {
      user_id: userId,
      active: true
    }
  })
  .then(function(forms) {
    return res.json(forms);
  })
  .catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * Create new form
 */
exports.createForm = function(req, res) {
  
  var userId = req.query.userId;

  db.onboard_form_submission.build({
    user_id: userId
  }).save().then(function(newForm) {
    return res.json(newForm);
  })
  .catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};