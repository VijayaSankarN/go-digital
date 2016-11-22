'use strict';

angular.module('onboard').controller('onboardController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

    $scope.authentication = Authentication;

    $scope.formId = $state.params.formId;
    $scope.pageId = $state.params.pageId || 1;
    $scope.pageDetails = {};
    $scope.fieldDetails = {};

    // Get pages
    $scope.getPages = function() {
      $http.get('/api/getPages').success(function(response) {
        
        $scope.pageDetails = response;
        $scope.pageProgress = Math.floor((100/$scope.pageDetails.length) / 10) * 10;

      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // Get fields inside the page
    $scope.getFields = function (pageId) {
      var pageIdParam = {
        params: {
          pageId: pageId
        }
      }
      $http.get('/api/getFields', pageIdParam).success(function (response) {

        $scope.fieldDetails = response;

      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.getPages();
    $scope.getFields($scope.pageId);

  }
]);