'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
])


/* Controllers */
angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', function($scope) {

	$scope.listCity = [];
	$scope.whereCity = "";

	$scope.nextCity = function () {
		$scope.listCity.push($scope.whereCity);
		$scope.whereCity = "";
	}
}]);