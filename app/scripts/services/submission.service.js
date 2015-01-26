'use strict';


angular.module('multiStepFormApp')
  .service('SubmissionService', function ($http) {

        var submit = function(data) {
            return $http.post('/submission', data);
        };

        return {
            submit : submit
        };
  });
