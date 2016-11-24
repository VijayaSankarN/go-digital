'use strict';

/**
 * Onboard_form_submission Schema
 *
 * For generating list in dashboard
 */
 module.exports = function(sequelize, DataTypes) {

  var Onboard_form_submission_listOnly = sequelize.define('onboard_form_submission_listOnly', {
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
    form_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null
    },
    advertiser_company_name__c: DataTypes.STRING,
    advertiser_contact_first_name__c: DataTypes.STRING,
    advertiser_contact_last_name__c: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'onboard_form_submissions'
  });

  return Onboard_form_submission_listOnly;
};
