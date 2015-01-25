'use strict';

angular.module('multiStepFormApp')
  .directive('orderSummaryPreview', function () {
    return {
      templateUrl: '../../views/order-summary-preview.html',
      restrict: 'E',
      scope: {
        reservationData: '='
      },
      link: function ($scope) {
        var sum = function (items, prop) {
          return items.reduce(function (a, b) {
            return a + b[prop];
          }, 0);
        };

        var updateTotalTime = function (cleaningJob, additionalJobs) {
          return cleaningJob.timeAmount + sum(additionalJobs, 'timeAmount');
        };

        var updateTotalPrice = function (cleaningJob, additionalJobs, jobType) {
          return cleaningJob.price + sum(additionalJobs, 'price') + (jobType ? jobType.price : 0);
        };

        $scope.$watch('reservationData.additionalJobs', function (newData) {
          $scope.totalTime = updateTotalTime($scope.reservationData.job, newData);
          $scope.totalPrice = updateTotalPrice($scope.reservationData.job, newData, $scope.reservationData.jobType);
        });

        $scope.$watch('reservationData.job', function (newData) {
          $scope.totalTime = updateTotalTime(newData, $scope.reservationData.additionalJobs);
          $scope.totalPrice = updateTotalPrice(newData, $scope.reservationData.additionalJobs, $scope.reservationData.jobType);
        });

        $scope.$watch('reservationData.jobType', function (newData) {
          $scope.totalPrice = updateTotalPrice($scope.reservationData.job, $scope.reservationData.additionalJobs, newData);
        });
      }
    };
  });
