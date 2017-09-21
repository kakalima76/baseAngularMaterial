angular.module('app', ['ngRoute','ngMaterial'])
.constant("moment", moment)

.config(['$routeProvider', '$locationProvider', '$httpProvider', '$mdDateLocaleProvider', function($routeProvider, $locationProvider, $httpProvider, $mdDateLocaleProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'template_login/login.html',
		controller: 'loginController',
		controllerAs: 'vm'
	})

	.when('/inserir', {
		templateUrl: 'template_inserir/inserir.html',
		controller: 'inserirController',
		controllerAs: 'vm'
	})

		
	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode({
  		enabled: false,
  		requireBase: false
	});

	$httpProvider.interceptors.push('timestampInterceptor');

	$mdDateLocaleProvider.months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
	$mdDateLocaleProvider.shortMonths = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
	$mdDateLocaleProvider.days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    $mdDateLocaleProvider.shortDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD-MM-YYYY');
    };

}])