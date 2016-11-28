'use strict';

angular.module('dashboard').controller('dashboardController', ['$rootScope', '$scope', '$location', '$state', '$window', 'dashboardServices', 'DTOptionsBuilder',
  function ($rootScope, $scope, $location, $state, $window, dashboardServices, DTOptionsBuilder) {

    var userId = $rootScope.userDetails.site_user_id;

    $scope.pendingList = [];
    $scope.submittedList = [];
    $scope.dtOptions = '';
    $scope.isDisabled = false;
    $rootScope.allowedFormIds = [];
    $rootScope.allowedToView = [];

    // Get forms list
    $scope.getForms = function() {
      dashboardServices.getForms(userId).then(function(response) {
        
        var formsList = response.data;

        formsList.forEach(function(val, index) {
          if(val.form_status) {
            $scope.submittedList.push(val);
            $rootScope.allowedToView.push(val.onboard_form_submission_id);
          } else {
            $scope.pendingList.push(val);
            $rootScope.allowedFormIds.push(val.onboard_form_submission_id);
          }
        });

        $window.localStorage.setItem("GO_allowedToView", $rootScope.allowedToView);
        $window.localStorage.setItem("GO_allowedFormIds", $rootScope.allowedFormIds);

      }, function (error) {
        $scope.error = error.message;
      });
    };

    // Create and start a new form
    $scope.startNew = function() {
      
      $scope.isDisabled = true;
      
      dashboardServices.createForm(userId).then(function(response) {
        
        var formId = response.data.onboard_form_submission_id;

        $rootScope.allowedFormIds.push(formId);
        $window.localStorage.setItem("GO_allowedFormIds", $rootScope.allowedFormIds);

        $location.path('/onboard/'+formId);

      }, function (error) {
        $scope.error = error.message;
      });
    }

    // Bootstrap initializer
    $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap()
        .withBootstrapOptions({
            pagination: {
                classes: {
                    ul: 'pagination pagination-sm'
                }
            },

        })
        .withDOM('<"small col-sm-6"l><"small col-sm-6"f><"height-50">t<"row"<"small col-sm-6"i><"small col-sm-6"p>>');

  }
]);