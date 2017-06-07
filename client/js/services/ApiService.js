angular.module('zeroWasteApp')
.factory('ApiService', function($http){

  var getProducts = function() {
    return $http.get('/api/products')
      .then(function(response){
        return response.data
      })
  }
  var uploadProducts = function(data) {
    return $http.post('/api/products', data)
      .then(function(response){
        return response.data
      })
  }
  return {
    getProducts: getProducts,
    uploadProducts: uploadProducts
  }
})
