'use strict';

/**
 * @ngdoc function
 * @name privateLeakingInvestigationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the privateLeakingInvestigationApp
 */
angular.module('privateLeakingInvestigationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
