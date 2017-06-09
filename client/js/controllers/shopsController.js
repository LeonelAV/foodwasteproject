angular.module('zeroWasteApp')
  .controller('shopsController', function ($scope, $rootScope, $location, ApiService) {
    $rootScope.section = 'shops'

    $scope.getShops = function(){
      $scope.shops = ApiService.getShops()
      .then(function(response){
        $rootScope.shops = response
        console.log ($rootScope.shops)
      })

    }
  })
