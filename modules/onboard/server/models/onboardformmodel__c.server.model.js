'use strict';

/**
 * Onboard_form_submission Schema
 */
 module.exports = function(sequelize, DataTypes) {

  var onboardformmodel__c = sequelize.define('onboardformmodel__c', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sfid: DataTypes.STRING,
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
    tableName: 'onboardformmodel__c',
    timestamps: false
  });

  onboardformmodel__c.$schema = "salesforce";

  return onboardformmodel__c;
};
