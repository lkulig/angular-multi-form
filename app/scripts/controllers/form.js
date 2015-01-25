'use strict';

angular.module('multiStepFormApp')
  .controller('FormCtrl', function ($scope, jobService, $filter, cleaningAppointments) {

    $scope.reservationData = {
      job: null,
      jobType: null,
      additionalJobs: [],
      address: null,
      appointment: null
    };

    $scope.possibleAppointments = [];
    $scope.jobTypes = jobService.provideJobTypes();

    jobService.provideCleaningJobs().then(function (cleaningJobs) {
      $scope.cleaningJobs = $filter('orderBy')(cleaningJobs, 'area');
      if (!$scope.reservationData.job) {
        $scope.reservationData.job = $scope.cleaningJobs[0];
      }
    });
    $scope.additionalJobs = jobService.provideAdditionalJobs();

    $scope.updateAdditionalJobSelection = function (additionalJob) {
      additionalJob.selected = !additionalJob.selected;
      $scope.reservationData.additionalJobs = $filter('filter')($scope.additionalJobs, {selected: true});
    };

    $scope.searchForAppointments = function () {
      console.log($scope.reservationData.address);
      $scope.possibleAppointments.push(cleaningAppointments.searchForPossibleAppointments());
    };

    $scope.appointmentSelected = function (date) {
      console.log(date);
      $scope.reservationData.appointment = {
        title: date.title,
        time: date.start
      };
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

    $scope.updateJobType= function(jobType) {
      $scope.reservationData.jobType = jobType;
    };

    $scope.submitForm = function() {

    };
  });
