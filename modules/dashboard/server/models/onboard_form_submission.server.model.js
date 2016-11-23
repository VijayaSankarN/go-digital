'use strict';

/**
 * Field_mapping Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var Field_mapping = sequelize.define('field_mapping', {
    field_mapping_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    field_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    field_label: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    field_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    page_id: {
      type: DataTypes.INTEGER,
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
    tableName: 'field_mappings',
    timestamps: false
  });

  return Field_mapping;
};
