'use strict';

angular.module('multiStepFormApp')
  .filter('jobDetailsFilter', function ($filter) {
    return function (details) {
      return $filter('timeFilter')(details.timeAmount) + ' (~' + details.area + details.unit + '\xB2)';
    };
  });
