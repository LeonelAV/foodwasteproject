angular.module('zeroWasteApp')
  .controller('homeController', function ($scope, $location, ApiService) {
    $scope.title = 'HOME'
    $scope.getProducts = function(){
    	$scope.products = ApiService.getProducts()
    	.then(function(response){
    	  console.log (response)
    	})
    	$location.path('/products/')
    }
  })