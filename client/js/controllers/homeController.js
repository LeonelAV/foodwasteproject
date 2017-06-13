angular.module('zeroWasteApp')
  .controller('homeController', function ($scope, $rootScope, $location, ApiService) {
    $rootScope.section = 'HOME'

    $scope.getProducts = function(){
      console.log('show something')
      $scope.products = ApiService.getProducts()
      .then(function(response){
        $rootScope.products = response
        console.log ($rootScope.products)
      })
    $location.path('/products/')
    }
    //   $scope.getShops = function(){
    //   $scope.shops = ApiService.getShops()
    //   .then(function(response){
    //     $rootScope.shops = response
    //     console.log ($rootScope.shops)
    //   })

    // }
  })



