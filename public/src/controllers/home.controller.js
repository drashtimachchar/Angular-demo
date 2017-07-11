
(function () {
	angular
		.module('RouteDemo')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$rootScope'];
		
		function HomeController ($rootScope) {
			var vm = this;
			$rootScope.showFooter = true;
		}
	
})();