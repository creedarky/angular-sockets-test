import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeController from './home.controller';
import template from './home.html'

export default angular.module('app.components.homeho', [uiRouter])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>',
      });
  })
  .component('home', {
    template: template,
    controller: HomeController
  })
  .name;

