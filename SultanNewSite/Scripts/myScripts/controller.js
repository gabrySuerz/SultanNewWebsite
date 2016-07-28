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
    /*var boatsIT, boatsEN
    stringsJson.get()
        .success(function (response) {
            boatsIT = response.it
            boatsEN = response.en
        }).error(function (response) {

        })
    $translate.use() === 'it_IT' ? $scope.boats = boatsIT : $scope.boats = boatsEN
    $rootScope.$on('$translateChangeSuccess', function () {
        $translate.use() === 'it_IT' ? $scope.boats = boatsIT : $scope.boats = boatsEN
    })*/
})

site.controller('showMoreCtrl', function ($translate, $scope) {
    $scope.partners
    $translate('ABOUT-US.R&D.DESCRIPTION1').then(function (response) {
        $scope.partners = response
        console.log(response.length)
    })
})

site2.controller('insertCtrl', function (boatsJson, $scope, arrayBoats, Upload) {
    $scope.id = null

    boatsJson.getData('../../boats/boatsIT.json')
        .success(function (response) {
            $scope.boatsIT = response
        }).error(function (response) {

        })
    boatsJson.getData('../../boats/boatsEN.json')
        .success(function (response) {
            $scope.boatsEN = response
        }).error(function (response) {

        })

    $scope.insert = function () {
        var newBoatIT = {
            name: $scope.nameIT,
            description: $scope.descIT,
            picture: '../Images/Boats/' + $scope.skabadubuda.name,
            objModify: $scope.skabadubuda
        }
        var newBoatEN = {
            name: $scope.nameEN,
            description: $scope.descEN,
            picture: '../Images/Boats/' + $scope.skabadubuda.name,
            objModify: $scope.skabadubuda
        }
        $scope.upload($scope.skabadubuda);
        if ($scope.id != null) {
            newBoatIT.id = $scope.id
            newBoatEN.id = $scope.id
            arrayBoats.updateData($scope.boatsIT, newBoatIT, 'IT')
            arrayBoats.updateData($scope.boatsEN, newBoatEN, 'EN')
        }
        else {
            arrayBoats.insertData($scope.boatsIT, newBoatIT, 'IT')
            arrayBoats.insertData($scope.boatsEN, newBoatEN, 'EN')
        }
        newBoatIT = {}
        newBoatEN = {}
        $scope.id = null
    }

    $scope.upload = function (file) {
        Upload.upload({
            url: '../Images/Boats',
            method: 'POST',
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

    $scope.update = function (obj) {
        $scope.nameIT = obj.name
        $scope.descIT = obj.description
        $scope.nameEN = $scope.boatsEN[obj.id].name
        $scope.descEN = $scope.boatsEN[obj.id].description
        $scope.skabadubuda = obj.objModify
        $scope.id = obj.id
    }

    $scope.delete = function (obj) {
        arrayBoats.deleteData($scope.boatsIT, obj, 'IT')
        arrayBoats.deleteData($scope.boatsEN, $scope.boatsEN[obj.id], 'EN')
    }

})