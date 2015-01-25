'use strict';

describe('Service: jobService', function () {

  // load the service's module
  beforeEach(module('multiStepFormApp'));

  // instantiate service
  var jobDetails;
  beforeEach(inject(function (_jobDetails_) {
    jobDetails = _jobDetails_;
  }));

  it('should do something', function () {
    expect(!!jobDetails).toBe(true);
  });

});
