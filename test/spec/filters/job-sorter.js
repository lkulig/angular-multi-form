'use strict';

describe('Filter: jobSorter', function () {

  // load the filter's module
  beforeEach(module('multiStepFormApp'));

  // initialize a new instance of the filter before each test
  var jobSorter;
  beforeEach(inject(function ($filter) {
    jobSorter = $filter('jobSorter');
  }));

  it('should return the input prefixed with "jobSorter filter:"', function () {
    var text = 'angularjs';
    expect(jobSorter(text)).toBe('jobSorter filter: ' + text);
  });

});
