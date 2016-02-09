(function(){
	'use strict';

	angular.module('si.directives').directive('siNav', ['$location', function($location){
		return{
			restrict: "E",
			scope: {
				pages: "="
			},
			templateUrl: "web/js/directives/nav.template.html",

			//este scope envia a nav.template.html
			link : function(scope){

			//$location lee la url del navgadro y puede modificarla sin hacer peticiones al servidor	
			scope.getActiveClass = function(page){
				if($location.path().replace("/", "") == page.href || $location.path() == '/' && page.href == 'index'){
					return "active";
				}
		};	
			}
		}
	}])
})();