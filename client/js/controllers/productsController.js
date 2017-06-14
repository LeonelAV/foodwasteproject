angular.module('zeroWasteApp')
  .controller('productsController', function ($scope, $rootScope, $location, ApiService) {
    $scope.title = 'PRODUCTS'

    $scope.getProducts = function(){
      //console.log('show something')
      $rootScope.allProducts = ApiService.getProducts()
      .then(function(response){
        $rootScope.allProducts = response
      })
    }



    $scope.getShop = function () {
      // var codeLocation = $scope.queryLocation.split(':')[0]
      $location.path('/shops/')
    }
    $scope.supermaket= "supermaket"
    $scope.showQuery = function() {
      $scope.query="supermaket"
    }
    $scope.fishShop= "fishShop"
    $scope.showFishShop = function() {
      $scope.query="fishShop"
  }
    $scope.bakery= "bakery"
    $scope.showBakery = function() {
      $scope.query="bakery"
  }
    $scope.butchery= "butchery"
    $scope.showButchery = function() {
      $scope.query="butchery"
  }
     $scope.showAll= ""
    $scope.showAll = function() {
      $scope.query=""
  }

  })
  