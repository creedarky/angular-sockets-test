import angular from 'angular';

import TeacherController from './teacher.controller';
import template from './teacher.html'

export default angular.module('app.teacher', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher', {
        url: '/teacher',
        template: '<teacher></teacher>'
      });
  })
  .component('teacher', {
    template: template,
    controller: TeacherController
  })
  .name;

