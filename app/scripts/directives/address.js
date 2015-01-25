'use strict';

angular.module('multiStepFormApp')
  .directive('address', function () {
    return {
      templateUrl: 'views/address.html',
      restrict: 'E',
      scope: {
        address: '=',
        addressDetails: '='
      }
    };
  });
