'use strict';

describe('Controller: FormaddresscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('multiStepFormApp'));

  var FormaddresscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormaddresscontrollerCtrl = $controller('FormaddresscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
