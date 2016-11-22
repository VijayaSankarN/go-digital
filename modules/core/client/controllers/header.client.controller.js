'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', '$http', 'Authentication',
  function ($scope, $state, $http, Authentication) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // signout current user
    $scope.signout = function() {
      $http.get('/api/user/signout').success(function(){
        Authentication.user = $scope.authentication.user = null;
        $state.go('login');
      });
    };

    // Verify if the user is logged in or not
    $scope.verify = function() {
      $http.get('/api/user/verify').success(function(response){
        Authentication.user = response.user;
      });
    };

    $scope.verify();
  }
]);
