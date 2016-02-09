(function(){
	'use strict';

	angular.module('si.news').controller('newsController', ['$scope', function($scope){

		$scope.begin = 0;
		$scope.limit = 6;
		$scope.currentPage = 1;

		$scope.news = [
				{title: 'Titulo 1 aasd', img: 'web/img/si/sponsor/1.jpg', date: '1 de enero 2015', description: 'efwvwgrtefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecw'},
				{title: 'Titulo 2 aasd', img: 'web/img/si/sponsor/2.jpg', date: '1 de febrero 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwweracqervwrtbwervcqweecw'},
				{title: 'Titulo 3 aasd', img: 'web/img/si/sponsor/3.jpg', date: '1 de marzo 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweeefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwcw'},
				{title: 'Titulo 4 aasd', img: 'web/img/si/sponsor/4.jpg', date: '1 de abril 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwervcqweecw'},
				{title: 'Titulo 5 aasd', img: 'web/img/si/sponsor/3.jpg', date: '1 de mayo 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwweracqervwrtbwervcqweecw'},
				{title: 'Titulo 6 aasd', img: 'web/img/si/sponsor/2.jpg', date: '1 de junio 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwweracqervwrtbwervcqweecw'},
				{title: 'Titulo 7 aasd', img: 'web/img/si/sponsor/1.jpg', date: '1 de julio 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbwefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecweracqervwrtbwervcqweecw'},
				{title: 'Titulo 3 aasd', img: 'web/img/si/sponsor/3.jpg', date: '1 de agosto 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwqervwrtbwervcqweecw'},
				{title: 'Titulo 4 aasd', img: 'web/img/si/sponsor/4.jpg', date: '1 de septiembre 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwqervwrtbwervcqweecw'},
				{title: 'Titulo 3 aasd', img: 'web/img/si/sponsor/3.jpg', date: '1 de octubre 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwervwrtbwervcqweecw'},
				{title: 'Titulo 4 aasd', img: 'web/img/si/sponsor/2.jpg', date: '1 de noviembre 2015', description: 'efwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqefwvwgrtbetnerwvwcrtbeytrvwercrwthbertbvqewcwrtbweracqervwrtbwervcqweecwervwrtbwervcqweecw'}
				      ];

		//PAGINACION
		  $scope.pages = Math.ceil($scope.news.length / $scope.limit);
		  $scope.pageChanged = function() {
		    $scope.begin = (($scope.currentPage-1) * $scope.limit);//cambia de pagina y limita
		    console.log("BEGIN : " + $scope.currentPage + " - " + $scope.pages);
		  };

	}]);
})();