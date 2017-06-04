angular.module('zeroWasteApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .when('/products/', {
        templateUrl: 'templates/products.html',
        // controller: 'productsController'
      })
      .when('/shops/', {
        templateUrl: 'templates/shops.html',
        // controller: 'productsController'
      })
  })
  