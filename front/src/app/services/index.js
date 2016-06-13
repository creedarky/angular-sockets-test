import angular from 'angular';

import sockets from './sockets'
export default angular.module('app.services', [
  sockets
]).name;
