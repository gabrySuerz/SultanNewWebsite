//app.js keeps the configurations of

var site = angular.module('sultanSite', ['ui.router', 'pascalprecht.translate', 'ngParallax'])

//configuring the router of the site
site.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'htmlPages/home.html',
            controller: 'homeCtrl'
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

//use the translateProvider to pick Json in any language
//and set the default
site.config(function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: '../../StringsLanguage/string-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('it_IT')
})