angular.module('zeroWasteApp')
.factory('ApiService', function($http){

  var getProducts = function() {
    return $http.get('/api/products')
      .then(function(response){
        return response.data
      })
  }
  var addProduct = function(data) {
    return $http.post('/api/products', data)
      .then(function(response){
        return response.data
      })
  }
  var removeProduct = function(id) {
    return $http.delete(`/api/product/${id}`)
      .then(function(response){
        return response.data
      })
  }

  var getShops = function() {
    return $http.get('/api/shops')
      .then(function(response){
        return response.data
      })
  }

    var addShop = function(data) {
    return $http.post('/api/shops', data)
      .then(function(response){
        return response.data
      })
  }

  return {
    getProducts: getProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    getShops: getShops,
    addShop: addShop
  }
})
