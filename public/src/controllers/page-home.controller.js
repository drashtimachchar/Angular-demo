
(function () {
	angular
		.module('RouteDemo')
		.controller('PageHomeController', PageHomeController);

		PageHomeController.$inject = ['$state','$rootScope'];
		
		function PageHomeController ($state, $rootScope) {
			var vm = this;
			$rootScope.showFooter= true;
			$rootScope.showHeader= true;

			activate ();
			function activate () {
				var loggedinUser = localStorage.getItem("loginObj");
				if(!loggedinUser) {
					$state.go('login');
				}
			}
		}
	
})();