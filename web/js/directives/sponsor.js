(function(){
	'use strict';

	angular.module('si.directives').directive('sponsor',[function(){
		return{
			restrict: "E",
			scope:{
				sponsorImg: "=",
				titulo: "=",
				subtitulo: "="
			},
			templateUrl: "web/js/directives/sponsor.template.html",

			link: function(scope){

			}
		}

	}]);
})();