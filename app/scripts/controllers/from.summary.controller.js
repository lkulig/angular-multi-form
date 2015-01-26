'use strict';

angular.module('multiStepFormApp')
    .controller('FormSummaryController', function ($scope, localStorageService, SubmissionService, $state) {

        localStorageService.bind($scope, 'job');
        localStorageService.bind($scope, 'additionalJobs');
        localStorageService.bind($scope, 'contactDetails');
        localStorageService.bind($scope, 'jobType');
        localStorageService.bind($scope, 'appointment');
        localStorageService.bind($scope, 'payment');


        $scope.submit = function (data) {
            SubmissionService.submit(data).success(function () {
                localStorageService.clearAll();
                $state.go('form.details');
            }).error(function () {
                localStorageService.clearAll();
                $state.go('form.details');
            });
        };

        var sum = function (items, prop) {
            if (items) {
                return items.reduce(function (a, b) {
                    return a + b[prop];
                }, 0);
            }
            return 0;
        };

        function updateTotalPrice() {
            var jobTypePrice = $scope.jobType ? $scope.jobType.price : 0;
            $scope.totalPrice = $scope.job.price + sum($scope.additionalJobs, 'price') + jobTypePrice;
        }

        updateTotalPrice();

    });
