(function(){
	'use strict';

	angular.module('si.service').service('getSponsorService', ['$q', function($q){
		var sponsorService = {};//variabla q se va retornar del servicio

		sponsorService.getSponsor = function(){
			var deferred = $q.defer();
			var sponsor = [
			{
				img: "web/img/si/sponsor/1.jpg",
				titulo: "Imagen 1",
				subtitulo: "Subtitulo de la Imagen"
			},
			{
				img: "web/img/si/sponsor/2.jpg",
				titulo: "Imagen 2",
				subtitulo: "Subtitulo de la Imagen 2"
			},
			{
				img: "web/img/si/sponsor/3.jpg",
				titulo: "Imagen 3",
				subtitulo: "Subtitulo de la Imagen 3"
			},
			{
				img: "web/img/si/sponsor/4.jpg",
				titulo: "Imagen 3",
				subtitulo: "Subtitulo de la Imagen 4"
			}
			];

			 deferred.resolve(sponsor);
			 return deferred.promise;
		}
		return sponsorService;

	}]);
})();