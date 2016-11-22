'use strict';

angular.module('onboard.services').factory('onboardService', ['$resource',
  function ($resource) {
    return $resource('api/onboard/:formId', {
      formId: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
