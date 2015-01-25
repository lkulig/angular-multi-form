'use strict';

describe('Directive: orderProgress', function () {

  // load the directive's module
  beforeEach(module('multiStepFormApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<order-progress></order-progress>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the orderProgress directive');
  }));
});
