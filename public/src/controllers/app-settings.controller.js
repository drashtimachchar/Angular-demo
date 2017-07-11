
(function () {
	angular
		.module('RouteDemo')
		.controller('AppSettingsController', AppSettingsController);

		AppSettingsController.$inject = ['$state', '$rootScope'];
		
		function AppSettingsController ($state, $rootScope) {
			var vm = this;
			$rootScope.showFooter= false;
		}
	
})();