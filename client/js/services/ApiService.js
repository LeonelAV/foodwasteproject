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

  var getCoordenates = function (address) {
    return $http.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyDafjpKKDyuZewwazCQGpx6uUnjZHGODR8')
      .then(function(response){
        return response.data.results[0].geometry.bounds.northeast
      })
  }

  var getDistanceBetween = function (origin, destination) {
    return $http.post(' http://maps.googleapis.com/maps/api/distancematrix/xml?origins=' + origin + '&destinations=' + destination + '&mode=walking')
      .then(function(response){
        return response
      })
  }

  


  return {
    getProducts: getProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    getShops: getShops,
    addShop: addShop,
    getCoordenates: getCoordenates,
    getDistanceBetween: getDistanceBetween

  }
})
