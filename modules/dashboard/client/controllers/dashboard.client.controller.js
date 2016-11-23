'use strict';

angular.module('dashboard').controller('dashboardController', ['$rootScope', '$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($rootScope, $scope, $state, $http, $location, $window, Authentication) {

    $scope.authentication = $rootScope.userDetails;


    console.log($scope.authentication)
      var userIdParam = {
        params: {
          userId: $scope.authentication.site_user_id
        }
      }
    
    $scope.getPages = function() {
      console.log(userIdParam);
      $http.get('/api/dashboard/getForms', userIdParam).success(function(response) {
        console.log(response);
      }).error(function (response) {
        console.log(response);
        $scope.error = response.message;
      });
    };

    $scope.getPages();

    // Load Datatable
    // $("table").DataTable({
    //   dom: '<"small col-sm-6"l><"small col-sm-6"f><"height-50">t<"height-20"><"small col-sm-6"i><"small col-sm-6"p>'
    // });
  }
]);