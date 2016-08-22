angular.
	module('core.mail').
	controller('userCtrl', ['$scope', 'userService', function($scope,userService) {
		$scope.user = userService
	}]);




