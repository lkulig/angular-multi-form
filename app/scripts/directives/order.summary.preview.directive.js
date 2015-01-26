'use strict';

angular.module('multiStepFormApp')
    .directive('orderSummaryPreviewDirective', function (localStorageService) {
        return {
            templateUrl: '../../views/order-summary-preview.html',
            restrict: 'E',
            scope: {
                reservationData: '='
            },
            link: function ($scope) {
                var sum = function (items, prop) {
                    if (items) {
                        return items.reduce(function (a, b) {
                            return a + b[prop];
                        }, 0);
                    }
                    return 0;
                };

                function updateTotalTime() {
                    return $scope.job.timeAmount + sum($scope.additionalJobs, 'timeAmount');
                }

                function updateTotalPrice() {
                    var jobTypePrice = $scope.jobType ? $scope.jobType.price : 0;
                    return $scope.job.price + sum($scope.additionalJobs, 'price') + jobTypePrice;
                }

                localStorageService.bind($scope, 'job');
                localStorageService.bind($scope, 'additionalJobs');
                localStorageService.bind($scope, 'contactDetails');
                localStorageService.bind($scope, 'jobType');
                localStorageService.bind($scope, 'appointment');
                localStorageService.bind($scope, 'payment');

                $scope.totalTime = updateTotalTime();
                $scope.totalPrice = updateTotalPrice();

                $scope.$on('jobChanged', function () {
                    $scope.job = localStorageService.get('job');
                    $scope.additionalJobs = localStorageService.get('additionalJobs');
                    $scope.totalTime = updateTotalTime();
                    $scope.totalPrice = updateTotalPrice();
                });

                $scope.$on('appointmentChanged', function () {
                    $scope.appointment = localStorageService.get('appointment');
                });

                $scope.$on('jobTypeChanged', function () {
                    console.log('jobTypeChanged');
                    $scope.jobType = localStorageService.get('jobType');
                    $scope.totalPrice = updateTotalPrice();
                });

                $scope.$on('paymentChanged', function() {
                    $scope.payment = localStorageService.get('payment');
                });

                $scope.$on('contactDetailsChange', function () {
                    $scope.contactDetails = localStorageService.get('contactDetails');
                });
            }};
    });