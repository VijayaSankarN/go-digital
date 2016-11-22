'use strict';

/**
 * Page Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var Page = sequelize.define('page', {
    page_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    page_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    }
  }, {
    freezeTableName: true,
    tableName: 'pages',
    timestamps: false
  });

  return Page;
};
