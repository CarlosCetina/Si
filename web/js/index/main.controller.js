(function(){
	'use strict'

	angular.module('si.index').controller('mainController', ['$scope', 'getSponsorService', function($scope, getSponsorService){

	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  var slides = $scope.slides = [];
	  var currIndex = 0;

	  $scope.addSlide = function(i) {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: '/web/img/si/main/DSCN817'+i+'.JPG',
	      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
	  };

	  for (var i = 0; i < 6; i++) {
	    $scope.addSlide(i);
	  }

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