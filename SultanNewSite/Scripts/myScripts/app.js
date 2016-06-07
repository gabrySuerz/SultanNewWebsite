var site = angular.module('sultanSite', ['ui.router'])

site.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'htmlPages/home.html',
            controller: 'homeController'
        })
        .state('prodotti', {
            url: '/prodotti',
            templateUrl: 'htmlPages/prodotti.html',
            controller: 'productsController'
        })
        .state('scopri', {
            url: '/scopri',
            templateUrl: 'htmlPages/scopri.html',
            controller: 'showMoreController'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'htmlPages/news.html',
            controller: 'newsController'
        })
        .state('contatti', {
            url: '/contatti',
            templateUrl: 'htmlPages/contatti.html',
            controller: 'contactsController'
        })
})