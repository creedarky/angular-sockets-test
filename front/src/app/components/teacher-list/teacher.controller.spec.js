'use strict';

describe('Component: TeacherController', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var TeacherComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TeacherComponent = $componentController('TeacherComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
