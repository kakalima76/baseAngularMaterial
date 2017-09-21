
(function(){
	angular.module('app')

	.service('loginService', ['$http', function($http){

		var logar = function(obj){
			return $http.post('http://localhost:3010/login', obj);
		}

		return {
			logar: logar
		}

	}]);
})();