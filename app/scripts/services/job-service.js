'use strict';

angular.module('multiStepFormApp')
  .service('jobService', function ($q) {

    var provideCleaningJobs = function () {
      var deferred = $q.defer();
      deferred.resolve(
        [{
          area: 100,
          timeAmount: 300,
          unit: 'm',
          price: 20
        },
          {
            area: 45,
            timeAmount: 180,
            unit: 'm',
            price: 20
          },
          {
            area: 60,
            timeAmount: 240,
            unit: 'm',
            price: 20
          },
          {
            area: 75,
            timeAmount: 270,
            unit: 'm',
            price: 20
          },
          {
            area: 155,
            timeAmount: 380,
            unit: 'm',
            price: 20
          },
          {
            area: 205,
            timeAmount: 600,
            unit: 'm',
            price: 20
          },
          {
            area: 85,
            timeAmount: 240,
            unit: 'm',
            price: 20
          }]);

      return deferred.promise;
    };

    var provideAdditionalJobs = function () {
      return [{
        job: 'Window cleaning',
        timeAmount: 30,
        price: 10
      },
        {
          job: 'Refrigerator cleaning',
          timeAmount: 30,
          price: 10
        },
        {
          job: 'Cupboard cleaning',
          timeAmount: 30,
          price: 10
        },
        {
          job: 'Oven cleaning',
          timeAmount: 30,
          price: 10
        }];
    };

    var provideJobTypes = function () {
      return [{
        name: 'Regular',
        price: 10
      },
        {
          name: 'Weekly',
          price: 10
        },
        {
          name: 'Every Other Week',
          price: 10
        }];
    };

    return {
      provideCleaningJobs: provideCleaningJobs,
      provideAdditionalJobs: provideAdditionalJobs,
      provideJobTypes: provideJobTypes
    };
  });
