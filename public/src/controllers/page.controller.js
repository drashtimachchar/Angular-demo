
(function () {
	angular
		.module('RouteDemo')
		.controller('PageController', PageController);

		PageController.$inject = ['$state', '$rootScope'];
		
		function PageController ($state, $rootScope) {
			var vm = this;
			$rootScope.showFooter= true;
			$rootScope.showHeader= true;
			
			vm.logout = logout;
			function logout (formName){
				localStorage.removeItem("loginObj");
				$state.go('login');
			}
			activate ();
			function activate () {
				var loggedinUser = localStorage.getItem("loginObj");
				if(!loggedinUser) {
					$state.go('app.login');
				}
			}
		}
	
})();