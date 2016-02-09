(function(){
	'use strict';

	angular.module('si.events').controller('eventsController', function ($scope) {
	  
	  //CARROUSEL SECTIO
	  $scope.myInterval = 0;
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

	  $scope.images = [];
	  for (var i = 0; i < 6; i++) {
	    $scope.addSlide(i);
	    $scope.images.push(i);
	  }
	  	
	//DATEPICKER SECTIO
	  $scope.dt = new Date();

	  $scope.getDayClass = function(date, mode) {
	/*    if (mode === 'day') {
	      var dayToCheck = new Date(date).setHours(0,0,0,0);

	      for (var i = 0; i < $scope.events.length; i++) {
	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        if (dayToCheck === currentDay) {
	          return $scope.events[i].status;
	        }
	      }
	    }
	*/
	    return '';
	  };

	  $scope.oneAtATime = true;

	  $scope.status = {
	    isFirstOpen: false,
	    isFirstDisabled: false
	  };
	});
})();