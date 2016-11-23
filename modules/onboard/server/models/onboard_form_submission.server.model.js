'use strict';

/**
 * Onboard_form_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var Onboard_form_submission = sequelize.define('onboard_form_submission', {
    onboard_form_submission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    last_page_completed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    createdat: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null
    },
    updatedat: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null
    },
    form_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null
    }
  }, {
    freezeTableName: true,
    tableName: 'onboard_form_submissions',
    timestamps: false
  });

  return Onboard_form_submission;
};
