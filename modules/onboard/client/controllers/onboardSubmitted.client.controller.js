'use strict';

angular.module('onboard').controller('onboardSubmittedController', ['$rootScope', '$scope', '$state', '$location', '$window', 'onboardServices',
  function ($rootScope, $scope, $state, $location, $window, onboardServices) {

    $scope.formId = $state.params.formId;

    // Check if the form is valid for the user, otherwise redirect to dashboard
    if($rootScope.allowedToView == undefined) {
      if($window.localStorage.getItem("GO_allowedToView") === null) {
        $location.path("/dashboard");
      }
      $rootScope.allowedToView = $window.localStorage.getItem("GO_allowedToView");
    }
    
    if($rootScope.allowedToView.indexOf($scope.formId*1) < 0) {
      $location.path("/dashboard");
    }

    // Get form data
    $scope.getFormData = function() {
      onboardServices.getFormData($scope.formId).then(function (response) {

        $scope.formData = response.data;

      }, function (error) {
        $scope.error = error.message;
      });
    }

    // Get labels 
    $scope.getLabels = function() {
      onboardServices.getLabels().then(function (response) {

        $scope.fieldLabels = response.data;

      }, function (error) {
        $scope.error = error.message;
      });
    };
  }
]);