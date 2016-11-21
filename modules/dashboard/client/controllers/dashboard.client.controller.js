'use strict';

angular.module('dashboard').controller('dashboardController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

    $scope.authentication = Authentication;

    // If user is not signed in then redirect to login
    if (!$scope.authentication.user) {
      Authentication.user = $scope.authentication.user = null;
      $location.path('/login');
    }

    // Load Datatable
    $("table").DataTable({
      dom: '<"small col-sm-6"l><"small col-sm-6"f><"height-50">t<"height-20"><"small col-sm-6"i><"small col-sm-6"p>'
    });
  }
]);