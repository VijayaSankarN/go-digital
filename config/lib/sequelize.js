'use strict';

var config = require('../config'),
env = process.env.NODE_ENV || 'development',
fs = require('fs'),
path = require('path'),
Sequelize = require('sequelize'),
SequelizeReflect = require('sequelize-reflect');

var db = {};

// Sequelize

if(env == 'development') {
  var sequelize = new Sequelize(config.db.options.database, config.db.options.username, config.db.options.password, {
    dialect: 'postgres',
    logging: config.db.options.logging, 
    host: config.db.options.host,
    port: config.db.options.port,
    timezone: '+00:00'
  });
} else {
  var sequelize = new Sequelize(config.db.options.dburl, {
    dialect: 'postgres',
    protocol: 'postgres',
    timezone: '+00:00',
    dialectOptions: {
      ssl: true
    }
  });
}

// console.log("Database URL : ",config.db.options.dburl);

// Import models
config.files.server.models.forEach(function(modelPath) {
  var model = sequelize.import(path.resolve(modelPath));
  db[model.name] = model;
});

// console.log("DB : ", db);

// Associate models
Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
var sequelizeReflect = new SequelizeReflect(db.sequelize);

db.sequelizeReflect = sequelizeReflect;

module.exports = db;