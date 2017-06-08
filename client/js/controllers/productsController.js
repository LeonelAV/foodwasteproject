angular.module('zeroWasteApp')
  .controller('productsController', function ($scope, $location, ApiService) {
    $scope.title = 'PRODUCTS'

    $scope.getShop = function () {
      // var codeLocation = $scope.queryLocation.split(':')[0]
      $location.path('/shops/')
    }

   $scope.removeProduct = function(id) {
     ApiService.removeProduct(id)
      .then(console.log)
    }
  })
  