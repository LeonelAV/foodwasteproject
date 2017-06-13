angular.module('zeroWasteApp')
  .controller('headerController', function ($scope, $location) {
    $scope.title = 'Login'

    $scope.getLogin = function () {
      console.log('Hello')
      $location.path('/login/')
    }

  })
