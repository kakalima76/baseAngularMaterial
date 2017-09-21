angular.module('app')
.controller('inserirController', ['$window', function($window){
	var vm = this;
	console.log('inserir');

	vm.logoff = function(){
		$window.localStorage.removeItem('usuario');
	}
	
}]);

