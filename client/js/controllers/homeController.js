angular.module('zeroWasteApp')
  .controller('homeController', function ($scope, $rootScope, $location, ApiService) {
    $rootScope.section = 'HOME'
    $scope.getProducts = function(){
      $scope.products = ApiService.getProducts()
      .then(function(response){
        $rootScope.products = response
        console.log ($rootScope.products)
      })
    $location.path('/products/')
    }
  })
