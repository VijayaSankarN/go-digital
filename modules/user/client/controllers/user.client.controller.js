'use strict';

angular.module('user').controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;
    $scope.authentication = Authentication;

    console.log("aaa",Authentication);

    // TODO-GO
    // Authentication in function parameter

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/dashboard');
    }

    $scope.verify = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/user/verify', $scope.credentials).success(function (response) {


        alert(response);
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        $state.go('dashboard');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);
