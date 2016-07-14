import angular from 'angular';

import LoginController from './login.controller';
import template from './login.html'

export default angular.module('app.components.account.login', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      });
  })
  .component('login', {
    template: template,
    controller: LoginController
  })
  .name;

