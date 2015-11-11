'use strict';

angular.module('plataformaApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [
      {
        'title': 'Home',
        'state': 'main'
      },
      {
        'title': 'File',
        'state': 'file'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
