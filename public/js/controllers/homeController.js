angular.module('zeroWasteApp')
  .controller('homeController', function ($scope, $location) {
    $scope.title = 'HOME'

    $scope.getProducts = function () {
      // var codeLocation = $scope.queryLocation.split(':')[0]
      $location.path('/products/')
    }

  })
  