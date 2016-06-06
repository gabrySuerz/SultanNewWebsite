var sultanSite = angular.module('sultanSite', ['ui.router']);

sultanSite.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'htmlPages/home.html',
            controller: 'homeController'
        });
});