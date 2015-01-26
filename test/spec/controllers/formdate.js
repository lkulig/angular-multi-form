'use strict';

describe('Controller: FormdateCtrl', function () {

  // load the controller's module
  beforeEach(module('multiStepFormApp'));

  var FormdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormdateCtrl = $controller('FormdateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
