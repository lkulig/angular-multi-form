'use strict';

angular.module('multiStepFormApp')
  .service('cleaningAppointments', function () {

    var searchForPossibleAppointments = function() {
      return [ {
        title: '8:00-12:00',
        start: '2015-01-27'
      },{
        title: '8:00-12:00',
        start: '2015-01-28'
      }];
    };

    return {
      searchForPossibleAppointments : searchForPossibleAppointments
    };
  });
