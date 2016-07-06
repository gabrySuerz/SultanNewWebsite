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

site2.controller('insertCtrl', function ($scope, arrayBoats, Upload) {
    /*stringsJson.get()
        .success(function (response) {
            boatsIT = response.it
            boatsEN = response.en
        }).error(function (response) {

        })
        */
    $scope.skabadubuda = ''
    var boatsIT = []
    var boatsEN = []
    $scope.insert = function () {
        var newBoatIT = {
            name: $scope.nameIT,
            description: $scope.descIT,
            scope: $scope.scopeIT,
            picture: '../Images/Boats/' + $scope.skabadubuda.name
        }
        var newBoatEN = {
            name: $scope.nameEN,
            description: $scope.descEN,
            scope: $scope.scopeEN,
            picture: '../Images/Boats/' + $scope.skabadubuda.name
        }
        $scope.upload($scope.skabadubuda);
        arrayBoats.insertData(boatsIT, newBoatIT)
        arrayBoats.insertData(boatsEN, newBoatEN)
        console.log($scope.skabadubuda)
    }

    $scope.upload = function (file) {
        Upload.upload({
            url: '../Images/Boats',
            headers: {
                'Content-Type': file.type
            },
            data: { file: file }
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
})