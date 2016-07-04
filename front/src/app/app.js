import angular from 'angular';
// import 'pdfjs-dist/build/pdf.worker';
import pdfjsLib from 'pdfjs-dist';
import 'angular-pdf';
import uiRouter from 'angular-ui-router';
import 'angular-socket-io';
import 'angular-ui-bootstrap';
import 'angular-file-upload';

import 'font-awesome-loader';
import '../style/app.css';

pdfjsLib.PDFJS.workerSrc = '/pdf-worker.bundle.js';

import pdfViewer from './pdf-viewer/pdf-viewer';
import components from './components';
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
  uiRouter,
  'btford.socket-io',
  'ui.bootstrap',
  'angularFileUpload',
  pdfViewer,
  services,
  components
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

  })
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .run($state => console.log($state.get()));

export default MODULE_NAME;
