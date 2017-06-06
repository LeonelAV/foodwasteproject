angular.module('zeroWasteApp')
  .controller('productsController', function ($scope, $location) {
    $scope.title = 'PRODUCTS'

    $scope.getShop = function () {
      // var codeLocation = $scope.queryLocation.split(':')[0]
      $location.path('/shops/')
    }
  })
  