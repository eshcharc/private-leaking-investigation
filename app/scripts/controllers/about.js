'use strict';

/**
 * @ngdoc function
 * @name privateLeakingInvestigationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the privateLeakingInvestigationApp
 */
angular.module('privateLeakingInvestigationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
