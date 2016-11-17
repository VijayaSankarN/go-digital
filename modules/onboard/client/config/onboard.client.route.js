'use strict';

// Setting up route
angular.module('onboard').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });
    
    // Home state routing
    $stateProvider
    .state('onboard', {
      url: '/onboard',
      templateUrl: 'modules/onboard/client/views/onboard.client.view.html'
    });
  }
]);
