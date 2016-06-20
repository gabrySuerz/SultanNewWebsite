//factory.js keeps the singletons of the project

(function () {
    'use strict';

    site.factory('boatsJson', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            getData: getData(url)
        };

        return service;

        function getData(url) { return $http.get(url) }
    }
})();