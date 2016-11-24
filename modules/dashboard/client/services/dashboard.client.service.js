'use strict';

angular.module('dashboard').factory('dashboardServices', function($http) {
  var getForms = '/api/dashboard/getForms',
      createForm = 'api/dashboard/createForm',
      dataFactory = {};

  dataFactory.getForms = function(userId) {
    var userIdParam = {
      params: {
        userId: userId
      }
    }
    return $http.get(getForms, userIdParam);
  }

  dataFactory.createForm = function(userId) {
    var userIdParam = {
      params: {
        userId: userId
      }
    }
    return $http.get(createForm, userIdParam);
  }


  return dataFactory;
});
