'use strict';

angular.module('dashboard').controller('dashboardController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

    $scope.authentication = Authentication;

    // Load Datatable
    $("table").DataTable({
      dom: '<"small col-sm-6"l><"small col-sm-6"f><"height-50">t<"height-20"><"small col-sm-6"i><"small col-sm-6"p>'
    });
  }
]);