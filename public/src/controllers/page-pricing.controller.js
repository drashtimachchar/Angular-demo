
(function () {
	angular
		.module('RouteDemo')
		.controller('PagePricingController', PagePricingController);

		PagePricingController.$inject = ['$state', '$rootScope'];
		
		function PagePricingController ($state, $rootScope) {
			var vm = this;
			$rootScope.showFooter= false;
			$rootScope.showHeader= false;
		}
	
})();