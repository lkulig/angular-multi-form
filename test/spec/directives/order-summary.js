'use strict';

describe('Directive: orderSummaryPreview', function () {

  // load the directive's module
  beforeEach(module('multiStepFormApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<order-summary-preview></order-summary-preview>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the orderSummaryPreview directive');
  }));
});
