angular.module('zeroWasteApp')
.factory('ApiService', function($http){

  function getProducts() {
    return $http.get('/api/products')
      .then (response => responde.data)
      console.log(response)
  }

    getProducts: getProducts
  }
})
