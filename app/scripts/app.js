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
    alCapone: ['$window', alCaponeDirective],
    tedBundy: ['$interval', tedBundyDirective],
    leeHarveyOswald: leeHarveyOswaldDirective
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
      .when('/directives/interval', {
        templateUrl: 'views/interval.html'
      })
      .when('/directives/jquery-remove', {
        templateUrl: 'views/jquery-remove.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
