'use strict';

angular.module('onboard').controller('onboardController', ['$scope', '$state', 'onboardServices',
  function ($scope, $state, onboardServices) {

    $scope.formId = $state.params.formId;
    $scope.pageId = $state.params.pageId;
    $scope.pageDetails = {};
    $scope.fieldDetails = {};
    $scope.selectOptions = {};
    $scope.formData = {};
    $scope.progressBar = 0;
    $scope.dispPrevious = 0;

    // Get pages
    $scope.getPages = function() {
      onboardServices.getPages().then(function(response) {

        $scope.pageDetails = response.data;
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

      }, function (error) {
        $scope.error = error.message;
      });
    };

    // Get fields inside the page
    $scope.getFields = function(pageId) {
      onboardServices.getFields(pageId).then(function (response) {

        $scope.fieldDetails = response.data;

        // Get field id for select elements
        var selectFieldsList = $scope.fieldDetails.filter(function(val, index){
          if(val.field_type.toLowerCase() == "select")
            return val;
        });

        if(selectFieldsList.length) {
          selectFieldsList.forEach(function(val, index){
            $scope.getSelectOptions(val.field_mapping_id);
          });
        } else {
          $scope.getFormData($scope.formId);
        }

      }, function (error) {
        $scope.error = error.message;
      });
    };

    // Get options for select element
    $scope.getSelectOptions = function(fieldId) {      
      onboardServices.getSelectOptions(fieldId).then(function (response) {
        
        var selectOptionsArr = response.data;

        selectOptionsArr.forEach(function(val, index) {
          if($scope.selectOptions[val.field_mapping_id] == undefined) {
            $scope.selectOptions[val.field_mapping_id] = [];
          }
          $scope.selectOptions[val.field_mapping_id].push(val.select_value);
        });

        $scope.getFormData($scope.formId);

      }, function (error) {
        $scope.error = error.message;
      });
    };

    // Get data filled by user
    $scope.getFormData = function(formId) {
      onboardServices.getFormData(formId).then(function (response) {
        
        $scope.formData = response.data;

      }, function (error) {
        $scope.error = error.message;
      });
    }

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
  }
]);