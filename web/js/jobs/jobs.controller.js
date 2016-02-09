(function(){
	'use strict';

	angular.module('si.jobs').controller('jobsController', ['$scope', 'getSponsorService', function($scope, getSponsorService){

		$scope.jobs = [
			{name : 'Dev. java', edad: '20', salario: '50', sexo: 'Masculino', descripcion: 'Solicito programador q sepa bla blab'+
																							'bla bla bla bla bla blabl ablblab'+
																							'sdfasfgsdfgsgadfgadfgafdgasgasgssagsa'+
																							'asgsagsagas asgsagsadgsagsadgsagsadgasg',
			 emailContacto: 'algo@gmail.com', telContacto: '999999999', empresa: 'google'},
			{name : 'Dev. angular', edad: '20', salario: '50', sexo: 'Masculino', descripcion: 'Solicito programador q sepa bla blab'+
																							'bla  bla blajtyjteukilruiyriykb'+
																							'shtyumrtymrtu  ryjetyjetujtjet'+
																							'asgsagsagas asgsagsadgsagsadgsagsadgasg',
			 emailContacto: 'algo@gmail.com', telContacto: '999999999', empresa: 'Facebook'},
			{name : 'Dev. phyton', edad: '20', salario: '50', sexo: 'Masculino', descripcion: 'Solicito  q sepa bla blab asdasdasd'+
																							'bla bla bla bla bla blabl ablblab'+
																							'ooooooo jj uuuuuuu aaaaaaaa'+
																							'sg agas asdasdasdasd  asdasdasd',
			 emailContacto: 'algo@gmail.com', telContacto: '999999999', empresa: 'google'},
					  ];


	    $scope.status = {
	    	isFirstOpen: false,
	    	isFirstDisabled: false
	  	};

	  	$scope.sponsors = [];

	  	getSponsorService.getSponsor().then(
	  		function(results){
	  			$scope.sponsors = results;
	  		},
	  		function(){
	  			console.log("ERROR GETSPONSORS");
	  		}
	  	);

	}]);
})();