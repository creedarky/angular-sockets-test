import angular from 'angular';
import uiRouter from 'angular-ui-router';

import TeacherController from './teacher.controller';
import template from './teacher.html'

export default angular.module('app.components.teacher', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher', {
        url: '/teacher/:id',
        template: '<teacher-class></teacher-class>',
        authenticate: true
      });
  })
  .component('teacherClass', {
    template: template,
    controller: TeacherController
  })
  .name;

