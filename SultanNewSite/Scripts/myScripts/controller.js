//controller.js keeps every controller that the site needs

site.controller('mainCtrl', function ($scope, $translate,$rootScope) {
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

site.controller('homeCtrl', function ($translate) {


    //$translate.use('it-IT')

})