'use strict';

angular.module('plataformaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('file', {
        url: '/file',
        templateUrl: 'app/file/file.html',
        controller: 'FileCtrl',
        controllerAs: 'file'
      });
  });
