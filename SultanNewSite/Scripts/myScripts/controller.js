//controller.js keeps every controller that the site needs

site.controller('mainCtrl', function ($scope, $translate, $rootScope) {
    $scope.toggleLang = function () {
        $translate.use() === 'it_IT' ? $translate.use('en_EN') : $translate.use('it_IT')
    }

    $translate('TOPBAR.IMAGE').then(function (response) {
        $scope.image = response
    })

    $rootScope.$on('$translateChangeSuccess', function () {
        $scope.image = $translate.instant('TOPBAR.IMAGE');
    })
})

site.controller('homeCtrl', function () {

})

site.controller('worksCtrl', function ($translate, stringsJson, $rootscope) {
    var boatsIT, boatsEN
    stringsJson.get()
        .success(function (response) {
            boatsIT = response.it
            boatsEN = response.en
        }).error(function (response) {

        })
    $translate.use() === 'it_IT' ? $scope.boats = boatsIT : $scope.boats = boatsEN
    $rootScope.$on('$translateChangeSuccess', function () {
        $translate.use() === 'it_IT' ? $scope.boats = boatsIT : $scope.boats = boatsEN
    })
})

site.controller('insertCtrl', function () {
    stringsJson.get()
        .success(function (response) {
            boatsIT = response.it
            boatsEN = response.en
        }).error(function (response) {

        })
    
})

function data() {
    var temp = [
        { id: 1, name: 'prodotto 1', category: 'A', price: 123.4, description: 'prodotto A' },
        { id: 2, name: 'prodotto 2', category: 'B', price: 123.4, description: 'prodott B' }
    ];

    var result = new Object();

    result.getAll = function () {
        return temp;
    };

    result.getById = function (id) {
        for (var i = 0; i < temp.length; i++) {
            var x = temp[i];
            if (x.id == id)
                return x;
        }

        return null;
    };

    return result;
};

var dataAccess = data();

var products = dataAccess.getAll();

var product = dataAccess.getById(1);