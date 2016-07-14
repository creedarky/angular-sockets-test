import angular from 'angular';

import sockets from './sockets'
import auth from './auth'
import util from './util'
export default angular.module('app.services', [
  auth,
  sockets,
  util
]).name;
