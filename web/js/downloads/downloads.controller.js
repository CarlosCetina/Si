(function(){
	'use strict';

	angular.module('si.downloads').controller('downloadsController', ['$scope', function($scope){
		
		$scope.files = [
					{name : 'Libro de java', link: ''},
					{name : 'Aprendiendo Angular desde cero', link: ''},
					{name : 'Bootstrap para novatos', link: ''},
					{name : 'Algo por q no se me ocurrio nada', link: ''},
					];
		
	}]);

})();