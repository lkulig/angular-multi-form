'use strict';

angular.module('multiStepFormApp')
  .filter('JobDetailsFilter', function ($filter) {
    return function (details) {
      return $filter('TimeFilter')(details.timeAmount) + ' (~' + details.area + details.unit + '\xB2)';
    };
  });
