(function(){
	'use strict';

	angular.module('si').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		
		$locationProvider.html5Mode({
			enabled: true,
      		requireBase: false
		});

		$routeProvider
			.when('/',{
				templateUrl: 'web/js/index/main.html',
				controller: 'mainController'
			})
			.when('/quienes_somos',{
				templateUrl: 'web/js/whoweare/whoweare.html',
				controller: ''
			})
			.when('/eventos',{
				templateUrl: 'web/js/events/events.html',
				controller: 'eventsController'
			})
			.when('/noticias',{
				templateUrl: 'web/js/news/news.html',
				controller: 'newsController'
			})
			.when('/videos',{
				templateUrl: 'web/js/videos/videos.html',
				controller: 'videosController'
			})
			.when('/articulos',{
				templateUrl: 'web/js/articles/articles.html',
				controller: 'articlesController'
			})
			.when('/bolsa_de_trabajo',{
				templateUrl: 'web/js/jobs/jobs.html',
				controller: 'jobsController'
			})
			.when('/descargas',{
				templateUrl: 'web/js/downloads/downloads.html',
				controller: 'downloadsController'
			})
			.when('/contacto',{
				templateUrl: 'web/js/contact/contact.html',
				controller: 'contactController'
			})
			.otherwise({ redirectTo: '/' });
	}]);

})();





function troposRouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get("$state");
            $state.go("tropos.applications");
        });
        $locationProvider.html5Mode(true);
    }

    angular.module('tropos').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', troposRouteConfig]);






    