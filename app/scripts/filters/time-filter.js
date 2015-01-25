'use strict';

angular.module('multiStepFormApp')
  .filter('timeFilter', function ($filter) {
    return function (timeAmount ) {
      var totalTimeHours = parseInt(timeAmount / 60);
      var totalTimeMinutes = timeAmount % 60;
      return $filter('numberFilter')(totalTimeHours, 1) + ':' + $filter('numberFilter')(totalTimeMinutes, 2);
    };
  });
