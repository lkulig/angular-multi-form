'use strict';

angular.module('multiStepFormApp')
    .controller('FormAddressController', function ($scope, $rootScope, localStorageService) {

        localStorageService.bind($scope, 'contactDetails');

        $scope.processToNextStep = function () {
            localStorageService.set('contactDetails', $scope.contactDetails);
            $rootScope.$broadcast('contactDetailsChange');
        };
    });
