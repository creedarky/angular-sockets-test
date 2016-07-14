import angular from 'angular';

import ClassroomCreateController from './classroom-create.controller';
import template from './create.html'

export default angular.module('app.components.classroom', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('classroom', {
        url: '/classroom/create',
        template: '<classroom-create></classroom-create>',
        authenticate: true
      });
  })
  .component('classroomCreate', {
    template: template,
    controller: ClassroomCreateController
  })
  .name;

