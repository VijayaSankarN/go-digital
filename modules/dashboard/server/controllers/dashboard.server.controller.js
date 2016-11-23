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

  db.page.findAll({
    where: {
      user_id: userId,
      active: true
    },
    order: 'priority'
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