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
    });
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
    });
})