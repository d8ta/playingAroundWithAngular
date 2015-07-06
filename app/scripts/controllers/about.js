'use strict';

/**
 * @ngdoc function
 * @name angularizedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularizedApp
 */
angular.module('angularizedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
