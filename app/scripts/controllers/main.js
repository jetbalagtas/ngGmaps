'use strict';

/**
 * @ngdoc function
 * @name ngGmapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngGmapsApp
 */
angular.module('ngGmapsApp')
  // .controller('MainCtrl', function ($scope) {
  //   $scope.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
  .controller('MainCtrl', function(NgMap) {
    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});
