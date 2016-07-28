//factory.js keeps the singletons of the project

(function () {
    'use strict';

    site2.factory('boatsJson', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData(url) { return $http.get(url) }
    }
})();

(function () {
    'use strict';

    site2.factory('arrayBoats', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            insertData: insertBoat,
            updateData: updateBoat,
            deleteData: deleteBoat
        };

        return service;

        function insertBoat(boatsArray, obj, lang) {
            if (obj != null) {
                if (boatsArray.length == 0)
                    obj.id = 1;
                else
                    obj.id = boatsArray[boatsArray.length - 1].id + 1;
                boatsArray.push(obj);
                updateJson(lang, boatsArray)
            }
        }

        function updateBoat(boatsArray, obj, lang) {
            if (obj != null) {
                for (var i = 0; i < boatsArray.length; i++) {
                    var x = boatsArray[i];
                    if (x.id == obj.id) {
                        boatsArray[i] = obj;
                        updateJson(lang, boatsArray)
                        return;
                    }
                }
            }
        }

        function deleteBoat(boatsArray, obj, lang) {
            for (var i = 0; i < boatsArray.length; i++) {
                var x = boatsArray[i];
                if (x.id == obj.id) {
                    boatsArray.splice(i, 1);
                    updateJson(lang, boatsArray)
                    return;
                }
            }
        }

        function updateJson(lang, boatsArray) {
            if (lang === 'IT') {
                $http.post('getBoats.php', {
                    oldfile: 'boatsIT.json',
                    newfile: boatsArray
                })
            }
            if (lang === 'EN') {
                $http.post('getBoats.php', {
                    oldfile: 'boatsEN.json',
                    newfile: boatsArray
                })
            }
        }
    }
})();
