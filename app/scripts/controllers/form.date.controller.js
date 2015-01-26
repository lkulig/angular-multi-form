'use strict';

angular.module('multiStepFormApp')
    .controller('FormDateController', function ($scope, localStorageService, cleaningAppointments, jobTypes, $rootScope) {
        $scope.events = {
            color: 'blue',
            textColor: 'white',
            events: cleaningAppointments
        };

        $scope.eventSources = [ $scope.events ];
        $scope.jobTypes = jobTypes;

        localStorageService.bind($scope, 'selectedAppointment');
        localStorageService.bind($scope, 'selectedJobType');

        $scope.updateJobType = function (jobType) {
            $scope.selectedJobType = jobType;
            localStorageService.set('jobType', jobType);
            $rootScope.$broadcast('jobTypeChanged');
        };

        $scope.appointmentSelected = function (date) {
            $scope.selectedAppointment = {
                title: date.title,
                time: date.start
            };
            localStorageService.set('appointment', $scope.selectedAppointment);
            $rootScope.$broadcast('appointmentChanged');
        };

        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: '',
                    center: 'title',
                    right: 'prev,next'
                },
                eventClick: $scope.appointmentSelected
            }
        };
    });
