angular.module('apiService', [])

	// super simple service
	// each function returns a promise object
	.factory('api', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/');
			}
		}
	}]);
