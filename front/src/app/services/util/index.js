import angular from 'angular';
import Util from './util.service';

export default angular.module('app.services.util', [])
  .factory('Util', Util).name;
