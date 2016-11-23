'use strict';

angular.module('onboard').controller('onboardController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {

    $scope.authentication = Authentication;

    $scope.formId = $state.params.formId || 'NEW';
    $scope.pageId = $state.params.pageId;
    $scope.pageDetails = {};
    $scope.fieldDetails = {};
    $scope.selectOptions = {};
    $scope.progressBar = 0;
    $scope.dispPrevious = 0;

    // Get pages
    $scope.getPages = function() {
      $http.get('/api/getPages').success(function(response) {

        $scope.pageDetails = response;
        $scope.pageIconWidth = Math.floor((100/$scope.pageDetails.length) / 10) * 10;

        $scope.pageCollection = $scope.pageDetails.map(function(val,index) {
          return val.page_id;
        });

        $scope.pageId = $state.params.pageId || $scope.pageCollection[0];

        $scope.getFields($scope.pageId);
        $scope.progressBar = ($scope.getPosition($scope.pageId) * $scope.pageIconWidth) + $scope.pageIconWidth/2;
        $scope.dispPrev = $scope.getPosition($scope.pageId);
        $scope.dispNext = $scope.getPosition($scope.pageId) < ($scope.pageDetails.length-1);
        $scope.dispSubmit = !$scope.dispNext;
        
        if($scope.dispPrev) {
          $scope.prevLink = '/onboard/' + $scope.formId + '/' + $scope.pageCollection[$scope.getPosition($scope.pageId)-1];
        }

        if($scope.dispNext) {
          $scope.nextLink = '/onboard/' + $scope.formId + '/' + $scope.pageCollection[$scope.getPosition($scope.pageId)+1];
        }

      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // Get fields inside the page
    $scope.getFields = function(pageId) {
      var pageIdParam = {
        params: {
          pageId: pageId
        }
      }
      $http.get('/api/getFields', pageIdParam).success(function (response) {

        $scope.fieldDetails = response;

        // Get field id for select elements
        var selectFieldsList = response.filter(function(val, index){
          if(val.field_type.toLowerCase() == "select")
            return val;
        });

        if(selectFieldsList.length) {
          selectFieldsList.forEach(function(val, index){
            $scope.getSelectOptions(val.field_mapping_id);
          });
        }

      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // Get options for select element
    $scope.getSelectOptions = function(fieldId) {
      var fieldIdParam = {
        params: {
          fieldId: fieldId
        }
      }
      $http.get('/api/getSelectOptions', fieldIdParam).success(function (response) {
        var selectOptionsArr = response;

        selectOptionsArr.forEach(function(val, index) {
          if($scope.selectOptions[val.field_mapping_id] == undefined) {
            $scope.selectOptions[val.field_mapping_id] = [];
          }
          $scope.selectOptions[val.field_mapping_id].push(val.select_value);
        });

      }).error(function (response) {
        $scope.error = response.message;
      });
    };


    // Get the current position of the page
    $scope.getPosition = function(value) {
      return $scope.pageCollection.indexOf(value*1);
    }

    // Change the progree icon to activated
    $scope.submitAction = function() {
      $scope.progressBar = 100;
      var iconId = $scope.pageDetails.length-1;
      angular.element(document.querySelector('#page-' + iconId)).removeClass('active');
      angular.element(document.querySelector('#page-' + iconId)).addClass('activated');
      angular.element(document.querySelector('#pageicon-' + iconId)).removeClass('fa-ellipsis-h');
      angular.element(document.querySelector('#pageicon-' + iconId)).addClass('fa-check');
    }

    $scope.errorClass = function (control, method) {
        if ($scope.onboardForm[control].$invalid && !$scope.onboardForm[control].$pristine) {
            return (method == "class" ? 'has-error' : true);
        }
    };
  }
]);