(function(){
	'use strict';

	angular.module('si.articles').controller('articlesController', ['$scope', 'getSponsorService', function($scope, getSponsorService){

		$scope.articlesHTML = '';

          $scope.articlesComments = [];

     	$scope.articlesList = [
     	    {anio: '2015', months: [{ name: 'Enero', articles: [{title: 'SAWE', id: '1'}]},
     	    						{ name: 'Marzo', articles: [{title: 'DSGH', id: '2'}]},
     	    						{ name: 'Diciembre', articles: [{title: 'TGYH', id: '3'}]}
     	    						]
     	    },
     		{anio: '2016', months: [{ name: 'Enero', articles: [{title: 'AAAAAA', id: '5'}]}]}
     	];
				
          $scope.selectedYear = '';
          $scope.selectedMonth = '';


     	$scope.toggleMonths = function(anio){
               $scope.selectedYear = anio;
               $scope.selectedMonth = '';
     	};


          $scope.toggleArticles = function(month){
               $scope.selectedMonth = month;
          };

          $scope.loadArticles = function(id){
               console.log("GET ARTICLE");
               $scope.articlesHTML = '<div>\
                                   <div dir="ltr" style="text-align: left;" trbidi="on">\
                                   <div style="text-align: justify;">\
                                   <div class="separator" style="clear: both; text-align: center;">\
                                   <a href="http://4.bp.blogspot.com/-ZD6lZg0CjGA/VqwAgPiRiEI/AAAAAAAAAeQ/W1rQwgpwr2I/s1600/twitter-conversation.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="360" src="http://4.bp.blogspot.com/-ZD6lZg0CjGA/VqwAgPiRiEI/AAAAAAAAAeQ/W1rQwgpwr2I/s640/twitter-conversation.jpg" width="640"></a></div>\
                                   Salud Integral Yucatan y La Confederación Nacional de Organizaciones Populares, a través de su Movimiento de Profesionales y Técnicos realizaran &nbsp;pruebas de sangre en jóvenes y mujeres del municipio de Mérida TOTALMENTE GRATUITAS &nbsp;el ´próximo jueves 4 de febrero del 2016 en las instalaciones de la CNOP YUCATAN&nbsp;</div>\
                                   <div style="text-align: justify;">\
                                   Diez minutos es lo que tomará saber si una persona está o no infectada de VIH/Sida informó El secretario del MNPyT de la CNOP, el Dr. Josué Quintal Gurubel, invitó a la gente a participar marcando al número 999 232 8013 para apartar un espacio ya que es cupo limitado.explicó que estas pruebas rápidas de "alta o fuerte sospecha" se realizarán con la mayor confidencialidad posible y en caso de resultar positivas, se confirmarán a través de una segunda prueba, la cual permitirá asegurar a la persona si es o no portadora de este virus.Lo más importante de estas acciones no es sólo el trabajo de detección, sino que también les daremos consejería, tanto de resultar positivo como negativo, pues de lo que se trata es de impedir que esta enfermedad continúe propagándose.</div>\
                                   <div style="text-align: justify;">\
                                   “Es una manera de concientizar no solamente a las mujeres sino a quienes conviven con ellas, sus parejas, novios. La idea es ‘protejámonos todos y todas’, disminuyamos la infección por el VIH, y sobre todo conozcamos nuestro estado de salud para acceder a nuestro derecho a la salud, derecho que está garantizado por la Constitución”, señaló.</div>\
                                   <div style="text-align: justify;">\
                                   Dio a conocer que en Yucatán hay hasta el momento más de cuatro mil casos registrados de VIH/Sida, siendo las mujeres dedicadas al hogar las más afectadas. Los jóvenes aparecen el octavo lugar de grupos de contagio .</div>\
                                   <div style="text-align: justify;">\
                                   Añadió que por cada caso conocido, hay tres personas que desconocen ser portadores del VIH/Sida, lo cual puede aumentar la propagación del virus. &nbsp;&nbsp;</div>\
                                   <div style="text-align: justify;">\
                                   De 1981 a la fecha, en el mundo se han registrado entre 33 y 36 millones de casos de VIH/Sida, cifra a la que tiene sumársele 25 millones más de personas que ya han fallecido.</div>\
                                   </div>\
                                   <div style="clear: both;"></div>\
                                   </div>';
               
               $scope.articlesComments = ['ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
                                             'SDDD',
                                             'DFFF',
                                             'FGGG',
                                             'GHHH'];                    

          };

          $scope.newComment = '';

          $scope.addComment = function(){
               $scope.articlesComments.push($scope.newComment);

          };

          getSponsorService.getSponsor().then(
               function(results){
                    var randomNumber = getRandomInt(0, results.length-1);
                    $scope.sponsor = results[randomNumber];
                    console.log("$scope.sponsor : " + randomNumber);
               },
               function(){
                    console.log("ERROR GETSPONSORS");
               }
          );
          function getRandomInt(min, max) {
               return Math.floor(Math.random() * (max - min + 1)) + min;
          }


	}]);

})();