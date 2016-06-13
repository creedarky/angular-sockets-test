'use strict';

angular.module('plataformaApp.auth', ['plataformaApp.constants', 'plataformaApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
