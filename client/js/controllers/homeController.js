angular.module('zeroWasteApp')
  .controller('homeController', function ($scope, $location, ApiService) {
    $scope.title = 'HOME'

    $scope.getProducts = function () {
      $location.path('/products/')
    }


  })
  