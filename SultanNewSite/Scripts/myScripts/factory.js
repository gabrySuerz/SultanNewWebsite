//factory.js keeps the singletons of the project

site.factory('stringsJson', ['$http', function ($http) {
    return { //request for the strings file
        getJson: function (url) {
            return $http.get(url)
        }
    }
}])