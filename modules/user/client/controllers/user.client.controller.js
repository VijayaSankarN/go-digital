'use strict';

angular.module('user').controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;
    $scope.authentication = Authentication;

    $scope.signin = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/user/signin', $scope.credentials).success(function (response) {

        // If successful we assign the response to the global user model
        $scope.authentication.user = Authentication.user = response;

        $window.user = response;

        $state.go('dashboard');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.errorClass = function (control, method) {
        if ($scope.userForm[control].$invalid && !$scope.userForm[control].$pristine) {
            return (method == "class" ? 'has-error' : true);
        }
    };
  }
]);
