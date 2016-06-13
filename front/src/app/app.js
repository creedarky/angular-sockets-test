import angular from 'angular';
import 'pdfjs-dist';
import 'angular-pdf';
import 'angular-ui-router';
import 'angular-socket-io';

import 'font-awesome-loader';
import '../style/app.css';

import teacher from './teacher';
import services from './services'


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($http) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$http = $http;
    this.$http.get('/api/things').then((response) => {
      console.log(response);
    })
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'ui.router',
  'btford.socket-io',
  services,
  teacher
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
