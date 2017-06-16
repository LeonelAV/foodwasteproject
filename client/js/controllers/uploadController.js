angular.module('zeroWasteApp')
    .controller('uploadController', function($scope, $rootScope, $location, ApiService, toastr) {
        $rootScope.section = 'upload'

        $rootScope.shops = ApiService.getShops()
            .then(function(response) {
                $rootScope.shops = response
            })

        ApiService.getProducts()
            .then(function(response) {
                $rootScope.allProducts = response
            })


        $scope.addProduct = function() {
            const { name, category, image, price, discount, experyAt, shop } = $scope
            const products = { name, image, price, experyAt }
            ApiService.addProduct({ name, category, image, price, discount, experyAt, shop })
                .then(msg => {
                    toastr.success('check your list', 'Product Created!')
                })
            allProductsToScope()
        }



        $scope.removeProduct = function(id) {
            ApiService.removeProduct(id)
                .then(msg => {
                    toastr.error('Product Removed!', msg)
                    allProductsToScope()
                })
        }


        function allProductsToScope() {
            ApiService.getProducts()
                .then(function(response) {
                    $rootScope.allProducts = response
                })
        }


})