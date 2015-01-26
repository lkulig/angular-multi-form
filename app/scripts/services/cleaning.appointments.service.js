'use strict';

function CleaningAppointmentsService() {
    var searchForPossibleAppointments = function () {
        return[
            {
                title: '8:00-12:00',
                start: '2015-01-28'
            }
        ];
    };

    return {
        searchForPossibleAppointments: searchForPossibleAppointments
    };
}

angular.module('multiStepFormApp')
    .provider('CleaningAppointmentsService', function () {

        this.$get = [function service() {
            return new CleaningAppointmentsService();
        }];

    });
