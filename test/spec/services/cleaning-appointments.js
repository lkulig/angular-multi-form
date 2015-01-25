'use strict';

describe('Service: cleaningAppointments', function () {

  // load the service's module
  beforeEach(module('multiStepFormApp'));

  // instantiate service
  var cleaningAppointments;
  beforeEach(inject(function (_cleaningAppointments_) {
    cleaningAppointments = _cleaningAppointments_;
  }));

  it('should do something', function () {
    expect(!!cleaningAppointments).toBe(true);
  });

});
