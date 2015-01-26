'use strict';

describe('Filter: JobDetailsFilter', function () {

  // load the filter's module
  beforeEach(module('multiStepFormApp'));

  // initialize a new instance of the filter before each test
  var jobDetailsFilter;
  beforeEach(inject(function ($filter) {
    jobDetailsFilter = $filter('JobDetailsFilter');
  }));

  it('should return the input prefixed with "JobDetailsFilter filter:"', function () {
    var text = 'angularjs';
    expect(jobDetailsFilter(text)).toBe('JobDetailsFilter filter: ' + text);
  });

});
