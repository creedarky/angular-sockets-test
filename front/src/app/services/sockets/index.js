import angular from 'angular';
import SocketFactory from './socket.factory';

export default angular.module('app.services.socket', [])
  .factory('SocketFactory', SocketFactory)
  .name
