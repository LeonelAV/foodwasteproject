angular.module('zeroWasteApp')
  .controller('uploadController', function ($scope, $rootScope, $location, ApiService) {
    $rootScope.section = 'upload'
    $scope.uploadProducts = function(){
      const {name, image, price, discount, experyAt, shop, address, expired, coordinates} = $scope
      ApiService.uploadProducts({name, image, price, discount, experyAt, shop, address, expired, coordinates})
          .then( console.log )
  }
})


  // angular.module('zeroWasteApp')
  // .controller('homeController', function ($scope, $rootScope, $location, ApiService) {
  //   $rootScope.section = 'HOME'
  //   $scope.getProducts = function(){
  //       $scope.products = ApiService.getProducts()
  //       .then(function(response){
  //         $rootScope.products = response
  //         console.log ($rootScope.products)
  //       })
  //       $location.path('/products/')
  //   }
  // })
