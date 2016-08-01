import angular from 'angular';
import Auth from './auth.service';
import authInterceptor from './interceptor.service';
import User from './user.service';


export default angular.module('app.services.auth', ['app.constants', 'app.services.util', 'ngCookies',
  'ui.router'
])
  .factory('Auth', Auth)
  .factory('User', User)
  .factory('authInterceptor', authInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  })
  .run(function ($rootScope, $state, Auth) {
    // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if (!next.authenticate) {
        return;
      }

      if (typeof next.authenticate === 'string') {
        Auth.hasRole(next.authenticate, angular.noop)
          .then(has => {
            if (has) {
              return;
            }

            event.preventDefault();
            return Auth.isLoggedIn(angular.noop)
              .then(is => {
                $state.go(is ? 'home' : 'login');
              });
          });
      } else {
        Auth.isLoggedIn(angular.noop)
          .then(is => {
            if (is) {
              return;
            }

            event.preventDefault();
            $state.go('home');
          });
      }
    });
  }).name;
