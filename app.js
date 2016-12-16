(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope) {
    $scope.name = "Teste";
    $scope.sayHello = function() {
      return "Hello";
    }
  });
}) ();
