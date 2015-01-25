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
    'ui.calendar'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('form', {
        url: '/checkout',
        abstract: true,
        templateUrl: '/views/form.html',
        controller: 'FormCtrl'
      })
      .state('form.details', {
        url: '/details',
        templateUrl: '/views/form-details.html'
      })
      .state('form.address', {
        url: '/address',
        templateUrl: '/views/form-address.html'
      })
      .state('form.time', {
        url: '/date',
        templateUrl: '/views/form-time.html'
      })
      .state('form.payment', {
        url: '/payment',
        templateUrl: '/views/form-payment.html'
      });

    $urlRouterProvider.when('/checkout', '/checkout/details');
    $urlRouterProvider.otherwise('/checkout/details');
  });

