'use strict';

// Setting up route
angular.module('user').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'modules/user/client/views/user.client.view.html'
    });
  }
]);
