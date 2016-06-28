import angular from 'angular';
// import 'pdfjs-dist/build/pdf.worker';
import pdfjsLib from 'pdfjs-dist';
import 'angular-pdf';
import 'angular-ui-router';
import 'angular-socket-io';
import 'angular-ui-bootstrap';
import 'angular-bootstrap-datetimepicker/src/css/datetimepicker.css';
import 'angular-bootstrap-datetimepicker';
import 'angular-bootstrap-datetimepicker/src/js/datetimepicker.templates';
import 'angular-file-upload';

import 'font-awesome-loader';
import '../style/app.css';

pdfjsLib.PDFJS.workerSrc = '/pdf-worker.bundle.js';

import pdfViewer from './pdf-viewer/pdf-viewer';
import teacher from './teacher';
import classroom from './classroom';
import services from './services'


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {

  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'ui.router',
  'btford.socket-io',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'angularFileUpload',
  pdfViewer,
  services,
  teacher,
  classroom
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
