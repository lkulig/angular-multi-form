'use strict';

angular.module('multiStepFormApp')
    .controller('FormPaymentController', function ($scope, $rootScope, localStorageService) {
        localStorageService.bind($scope, 'payment');

        $scope.updatePayment = function () {
            localStorageService.set('payment', $scope.payment);
            $rootScope.$broadcast('paymentChanged');
        };
    });
