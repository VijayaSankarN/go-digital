'use strict';

angular.module('dashboard').controller('dashboardController', ['$rootScope', '$scope', '$location', '$state', 'dashboardServices',
  function ($rootScope, $scope, $location, $state, dashboardServices) {

    var userId = $rootScope.userDetails.site_user_id;

    $scope.pendingList = [];
    $scope.submittedList = [];
    $scope.dtOptions = '';
    $scope.isDisabled = false;

    // Get forms list
    $scope.getForms = function() {
      dashboardServices.getForms(userId).then(function(response) {
        
        var formsList = response.data;

        formsList.forEach(function(val, index) {
          if(val.form_status) {
            $scope.submittedList.push(val);
          } else {
            $scope.pendingList.push(val);
          }
        });

        // Load Datatable
        // $("table").DataTable({
        //   dom: '<"small col-sm-6"l><"small col-sm-6"f><"height-50">t<"height-20"><"small col-sm-6"i><"small col-sm-6"p>'
        // });

      }, function (error) {
        $scope.error = error.message;
      });
    };

    // Create and start a new form
    $scope.startNew = function() {
      
      $scope.isDisabled = true;
      
      dashboardServices.createForm(userId).then(function(response) {
        
        var formId = response.data.onboard_form_submission_id;

        $location.path('/onboard/'+formId);

      }, function (error) {
        $scope.error = error.message;
      });
    }

  }
]);