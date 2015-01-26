'use strict';


angular.module('multiStepFormApp')
    .controller('FormDetailsController', function ($scope, $filter, $rootScope, localStorageService, jobs, additionalJobs) {

        $scope.jobs = $filter('orderBy')(jobs, 'area');
        localStorageService.bind($scope, 'job', $scope.jobs[0]);
        $scope.additionalJobs = additionalJobs;

        function processAdditionalJobs() {
            angular.forEach($scope.additionalJobs, function (additionalJob) {
                var processedAdditionalJob = additionalJob;
                angular.forEach(localStorageService.get('additionalJobs'), function (selectedAdditionalJob) {
                    if (processedAdditionalJob.job === selectedAdditionalJob.job) {
                        processedAdditionalJob.selected = selectedAdditionalJob.selected;
                    }
                });
            });
        }

        processAdditionalJobs();

        $scope.updateAdditionalJobSelection = function (additionalJob) {
            additionalJob.selected = !additionalJob.selected;
            localStorageService.set('additionalJobs', $filter('filter')($scope.additionalJobs, {selected: true}));
            $rootScope.$broadcast('jobChanged');
        };

        $scope.updateJob = function () {
            localStorageService.set('job', $scope.job);
            $rootScope.$broadcast('jobChanged');
        };
    });
