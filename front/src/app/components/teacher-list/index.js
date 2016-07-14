import angular from 'angular';
import uiRouter from 'angular-ui-router';

import TeacherController from './teacher.controller';
import template from './teacher.html'

export default angular.module('app.components.teacher-list', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher-list', {
        url: '/teacher',
        template: '<teacher-list></teacher-list>',
        authenticate: true
      });
  })
  .component('teacherList', {
    template: template,
    controller: TeacherController
  })
  .name;

