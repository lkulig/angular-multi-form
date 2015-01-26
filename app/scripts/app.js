'use strict';

angular
    .module('multiStepFormApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ngAutocomplete',
        'ui.bootstrap',
        'ui.calendar',
        'LocalStorageModule'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('form', {
                url: '/checkout',
                templateUrl: '/views/form.html',
                controller: 'FormController'
            })
            .state('form.details', {
                url: '/details',
                templateUrl: '/views/form-details.html',
                controller: 'FormDetailsController',
                resolve: {
                    jobs: function (JobService) {
                        return JobService.provideCleaningJobs();
                    },
                    additionalJobs: function (JobService) {
                        return JobService.provideAdditionalJobs();
                    }
                }
            })
            .state('form.address', {
                url: '/address',
                templateUrl: '/views/form-address.html',
                controller: 'FormAddressController'
            })
            .state('form.time', {
                url: '/date',
                templateUrl: '/views/form-time.html',
                controller: 'FormDateController',
                resolve: {
                    cleaningAppointments: function (CleaningAppointmentsService) {
                        return CleaningAppointmentsService.searchForPossibleAppointments();
                    },
                    jobTypes: function (JobService) {
                        return JobService.provideJobTypes();
                    }
                }
            })
            .state('form.payment', {
                url: '/payment',
                templateUrl: '/views/form-payment.html',
                controller: 'FormPaymentController'
            })
            .state('summary', {
                url: '/checkout/summary',
                templateUrl: '/views/form-summary.html',
                controller: 'FormSummaryController'
            });

        $urlRouterProvider.when('/checkout', '/checkout/details');
        $urlRouterProvider.otherwise('/checkout/details');
    }).config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setStorageType('sessionStorage');
        localStorageServiceProvider.setNotify(true, true);
    });

