angular.module('zeroWasteApp')
    .controller('shopsController', function($scope, $rootScope, $location, ApiService, toastr) {
        $rootScope.section = 'shops'

        ApiService.getShops()
            .then(function(response) {
                $scope.allShops = response
            })

        $scope.addShop = function() {
            const { name, category, image, address, lat, lng } = $scope
            ApiService.addShop({ name, category, image, address, lat, lng })
                .then(msg => {
                    toastr.success('Upload products in your shop', 'Shop Created!')
                })
            $location.path('/uploadProducts/')
        }

        $scope.getCoordenates = function() {
            const { address } = $scope
            $scope.info = 'your address is now validated'
            ApiService.getCoordenates(address)
                .then(function(response) {
                    $scope.lat = response.lat
                    $scope.lng = response.lng
                    return $scope.lat, $scope.lng
                })
        }
    })
