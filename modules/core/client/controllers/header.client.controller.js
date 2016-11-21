'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', '$http', 'Authentication',
  function ($scope, $state, $http, Authentication) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    $scope.signout = function() {
      $http.get('/api/user/signout').success(function(){
        $state.go('login');
      });
    };
  }
]);
