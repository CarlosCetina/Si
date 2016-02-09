(function(){
	'use strict'

	angular.module('si.index').controller('indexController', ['$scope', function($scope){

		$scope.navItems = [
			{ href: 'index', name: 'Inicio'},
			{ href: 'quienes_somos', name: 'Quienes Somos'},
			{ href: 'eventos', name: 'Eventos'},
			{ href: 'noticias', name: 'Noticias'},
			{ href: 'videos', name: 'Videos'},
			{ href: 'articulos', name: 'Articulos'},
			{ href: 'bolsa_de_trabajo', name: 'Bolsa de Trabajo'},
			{ href: 'descargas', name: 'Descargas'},
			{ href: 'contacto', name: 'Contacto'}
			];


		$scope.isFormShowing = false;
		$scope.session = {button: 'Iniciar Sesion'};

		$scope.login = function(){
			if(validateSession()){
					$scope.session.button = 'Cerrar Sesion';
			}else{
				if($scope.isFormShowing){
					$scope.user = "Toby";
					$scope.password = "pipi";

				}else{
					$scope.isFormShowing = true;
				}
			}
		};

		function validateSession(){//metodo para validar q haya sesion y la interacion con los labels y textfields del login

		}
			
	}]);

})();