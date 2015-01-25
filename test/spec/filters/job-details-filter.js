'use strict';

describe('Filter: jobDetailsFilter', function () {

  // load the filter's module
  beforeEach(module('multiStepFormApp'));

  // initialize a new instance of the filter before each test
  var jobDetailsFilter;
  beforeEach(inject(function ($filter) {
    jobDetailsFilter = $filter('jobDetailsFilter');
  }));

  it('should return the input prefixed with "jobDetailsFilter filter:"', function () {
    var text = 'angularjs';
    expect(jobDetailsFilter(text)).toBe('jobDetailsFilter filter: ' + text);
  });

});
