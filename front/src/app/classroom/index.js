import angular from 'angular';

import ClassroomCreateController from './classroom-create.controller';
import template from './create.html'

export default angular.module('app.teacher', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('classroom', {
        url: '/classroom/create',
        template: '<classroom-create></classroom-create>'
      });
  })
  .component('classroomCreate', {
    template: template,
    controller: ClassroomCreateController
  })
  .name;

