
(function () {
	angular
		.module('RouteDemo')
		.controller('AppDashboardController', AppDashboardController);

		AppDashboardController.$inject = ['$state','$rootScope'];
		
		function AppDashboardController ($state,$rootScope) {
			var vm = this;
			$rootScope.showFooter= true;
		}
	
})();