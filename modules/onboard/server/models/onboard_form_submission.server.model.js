'use strict';

/**
 * Onboard_form_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var Onboard_form_submission = sequelize.define('onboard_form_submission', {
    onboard_form_submission_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_page_completed: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    form_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    city__c: DataTypes.STRING,
    ppc_product_order_id__c: DataTypes.STRING,
    advertiser_contact_phone__c: DataTypes.STRING,
    selltype_ppc__c: DataTypes.STRING,
    business_description__c: DataTypes.STRING,
    postal_code__c: DataTypes.STRING,
    ppc__c: DataTypes.BOOLEAN,
    advertiser_company_name__c: DataTypes.STRING,
    advertiser_email_address__c: DataTypes.STRING,
    phone__c: DataTypes.STRING,
    advertiser_contact_first_name__c: DataTypes.STRING,
    advertiser_web_address__c: DataTypes.STRING,
    advertiser_contact_last_name__c: DataTypes.STRING,
    location_name__c: DataTypes.STRING,
    address_1__c: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'onboard_form_submissions'
  });

  return Onboard_form_submission;
};
