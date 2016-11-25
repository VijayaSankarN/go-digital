'use strict';

/**
 * Module dependencies
 */
 var path = require('path'),
 db = require(path.resolve('./config/lib/sequelize')),
 errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Get pages
 */
 exports.getPages = function(req, res) {

  db.page.findAll({
    where: {
      active: true
    },
    order: 'priority'
  })
  .then(function(pages) {
    return res.json(pages);
  })
  .catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * List fields required for the onboard form
 */
 exports.getFields = function(req, res) {

  var pageId = req.query.pageId;

  db.field_mapping.findAll({
    where: {
      page_id: pageId,
      active: true
    },
    order: 'priority'
  })
  .then(function(fields) {
    return res.json(fields);
  })
  .catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * List options for the select field
 */
 exports.getSelectOptions = function(req, res) {

  var fieldId = req.query.fieldId;

  db.select_value.findAll({
    where: {
      field_mapping_id: fieldId,
      active: true
    }
  })
  .then(function(options) {
    return res.json(options);
  })
  .catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * Get all data filled by the user so far for the give form
 */
 exports.getFormData = function(req, res) {

  var formId = req.query.formId;

  db.onboard_form_submission.findOne({
    where: {
      onboard_form_submission_id: formId,
      active: true
    }
  })
  .then(function(formData) {
    delete formData.dataValues.active;
    delete formData.dataValues.createdAt;
    delete formData.dataValues.updatedAt;
    return res.json(formData);
  })
  .catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * Update data filled by the user so far for the give form
 */
 exports.updateFormData = function(req, res) {

  var formData = req.body.formData;

  db.onboard_form_submission.update(formData,
  {
    where: {
      onboard_form_submission_id: formData.onboard_form_submission_id 
    }
  }).then(function(updateStatus){
    return res.json(updateStatus);                              
  }).catch(function(err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};