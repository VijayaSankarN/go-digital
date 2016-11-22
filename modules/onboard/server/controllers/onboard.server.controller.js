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
  
  db.page.findAll()
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
      page_id: pageId
    }
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

// /**
//  * List fields required for the onboard form
//  */
// exports.create = function(req, res) {
//   db.Article.findAll({
//     include: [
//       db.User
//     ]
//   })
//   .then(function(articles) {
//     return res.json(articles);
//   })
//   .catch(function(err) {
//     return res.status(400).send({
//       message: errorHandler.getErrorMessage(err)
//     });
//   });  
// };

// /**
//  * List fields required for the onboard form
//  */
// exports.read = function(req, res) {
//   db.Article.findAll({
//     include: [
//       db.User
//     ]
//   })
//   .then(function(articles) {
//     return res.json(articles);
//   })
//   .catch(function(err) {
//     return res.status(400).send({
//       message: errorHandler.getErrorMessage(err)
//     });
//   });
// };

// /**
//  * List fields required for the onboard form
//  */
// exports.update = function(req, res) {
//   db.Article.findAll({
//     include: [
//       db.User
//     ]
//   })
//   .then(function(articles) {
//     return res.json(articles);
//   })
//   .catch(function(err) {
//     return res.status(400).send({
//       message: errorHandler.getErrorMessage(err)
//     });
//   });
// };

// /**
//  * List fields required for the onboard form
//  */
// exports.delete = function(req, res) {
//   db.Article.findAll({
//     include: [
//       db.User
//     ]
//   })
//   .then(function(articles) {
//     return res.json(articles);
//   })
//   .catch(function(err) {
//     return res.status(400).send({
//       message: errorHandler.getErrorMessage(err)
//     });
//   });
// };
