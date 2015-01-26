'use strict';

angular.module('multiStepFormApp')
  .filter('TimeFilter', function ($filter) {
    return function (timeAmount ) {
      var totalTimeHours = parseInt(timeAmount / 60);
      var totalTimeMinutes = timeAmount % 60;
      return $filter('NumberFilter')(totalTimeHours, 1) + ':' + $filter('NumberFilter')(totalTimeMinutes, 2);
    };
  });
