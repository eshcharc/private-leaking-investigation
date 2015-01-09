'use strict';

/**
 * @ngdoc overview
 * @name privateLeakingInvestigationApp
 * @description
 * # privateLeakingInvestigationApp
 *
 * Main module of the application.
 */
angular
  .module('privateLeakingInvestigationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .directive({
    timeBomb: timeBombDirective,
    alCapone: ['$window', alCaponeDirective]
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/directives/plugin', {
        templateUrl: 'views/plugin.html'
      })
      .when('/directives/dom-tree-reference', {
        templateUrl: 'views/dom-tree-reference.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
