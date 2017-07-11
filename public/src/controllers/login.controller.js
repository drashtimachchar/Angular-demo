
(function () {
	angular
		.module('RouteDemo')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$state', '$scope'];
		
		function LoginController ($state, $scope) {
			var vm = this;
			vm.goToPage = goToPage;
			vm.login = login;
			function login (formName){
				if(formName.$valid) {
					var postData = {
						'username': vm.username,
						'password': vm.password
					};
				}

				localStorage.setItem("loginObj", JSON.stringify(postData));
				$state.go('page.page1');
			}
	
			function goToPage () {
				$state.go('page.page1');
			}
		}
	
})();