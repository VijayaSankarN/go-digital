'use strict';

angular.module('core').controller('HeaderController', ['$rootScope', '$scope', '$state', '$location', '$http', '$window', 'Authentication',
  function ($rootScope, $scope, $state, $location, $http, $window, Authentication) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // signout current user
    $scope.signout = function() {
      $http.get('/api/user/signout').success(function(){
        Authentication.user = $scope.authentication.user = null;
        $window.localStorage.removeItem("GO_allowedToView");
        $window.localStorage.removeItem("GO_allowedFormIds");
        $location.path('login');
      });
    };

    // Verify if the user is logged in or not
    $scope.verify = function() {
      $http.get('/api/user/verify').success(function(response){
        Authentication.user = response.user;
        $rootScope.userDetails = response.user;
      });
    };

    $scope.verify();
  }
]);
