'use strict';

angular.module('onboard').controller('onboardController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

  	$scope.authentication = Authentication;

    // // If user is not signed in then redirect to login
    // if (!$scope.authentication.user) {
    //   Authentication.user = $scope.authentication.user = null;
    //   $location.path('/login');
    // }

  }
]);