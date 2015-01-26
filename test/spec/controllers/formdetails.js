'use strict';

describe('Controller: FormdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('multiStepFormApp'));

  var FormdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormdetailsCtrl = $controller('FormdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
