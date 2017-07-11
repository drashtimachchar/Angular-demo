angular
	.module('RouteDemo', ['ui.router', 'ngMessages'])

	.config(function($stateProvider, $urlRouterProvider, $qProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'src/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('app', {
            abstract:true,
            url:'/app',
            templateUrl: 'src/templates/app.html'
        })
        .state('app.app1', {
            url:'/app-app1',
            controller:'AppDashboardController',
            controllerAs:'vm',
            templateUrl: 'src/templates/app-dashboard.html'   
        })
        .state('app.app2', {
            url:'/app-app2',
            controller:'AppSettingsController',
            controllerAs:'vm',
            templateUrl: 'src/templates/app-settings.html'
        })
        .state('page', {
            abstract:true,
            url:'/page',
            controller:'PageController',
            controllerAs:'vm',
            templateUrl: 'src/templates/page.html'
        })
        .state('page.page1', {
            url:'/page-page1',
            controller:'PageHomeController',
            controllerAs:'vm',
            templateUrl: 'src/templates/page-home.html'
        })
        .state('page.page2', {
            url:'/page-page2',
            controller:'PageAboutController',
            controllerAs:'vm',
            templateUrl: 'src/templates/page-about.html'   
        })
        .state('page.page3', {
            url:'/page-page3',
            controller:'PagePricingController',
            controllerAs:'vm',
            templateUrl: 'src/templates/page-pricing.html'   
        })
        .state('login', {
            url:'/login',
            controller:'LoginController',
            controllerAs:'vm',
            templateUrl: 'src/templates/login.html'   
        });        
});