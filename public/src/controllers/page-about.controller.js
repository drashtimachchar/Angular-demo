
(function () {
	angular
		.module('RouteDemo')
		.controller('PageAboutController', PageAboutController);

		PageAboutController.$inject = ['$state', '$rootScope'];
		
		function PageAboutController ($state, $rootScope) {
			var vm = this;
			$rootScope.showFooter= false;
			$rootScope.showHeader= true;
		}
	
})();