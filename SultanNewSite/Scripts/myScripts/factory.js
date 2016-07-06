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

(function () {
    'use strict';

    site2.factory('arrayBoats', factory);

    function factory() {
        var service = {
            insertData: insertBoat,
            updateData: updateBoat,
            deleteData: deleteBoat
        };

        return service;

        function insertBoat(boatsArray, obj) {
            if (obj != null) {
                if (boatsArray.length == 0)
                    obj.id = 1;
                else
                    obj.id = boatsArray[boatsArray.length - 1].id + 1;
                boatsArray.push(obj);
            }
        }

        function updateBoat(boatsArray, obj) {
            if (obj != null) {
                for (var i = 0; i < boatsArray.length; i++) {
                    var x = boatsArray[i];
                    if (x.id == obj.id) {
                        boatsArray[i] = obj;
                        return;
                    }
                }
            }
        }

        function deleteBoat(boatsArray, obj) {
            for (var i = 0; i < boatsArray.length; i++) {
                var x = boatsArray[i];
                if (x.id == id) {
                    boatsArray.splice(i, 1);
                    return;
                }
            }
        }
    }
})();
