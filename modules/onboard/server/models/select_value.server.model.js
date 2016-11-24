'use strict';

/**
 * Select_value Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var Select_value = sequelize.define('select_value', {
    select_value_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    field_mapping_id: {
      type: DataTypes.INTEGER
    },
    select_value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    }
  }, {
    freezeTableName: true,
    tableName: 'select_values',
    timestamps: false
  });

  return Select_value;
};
