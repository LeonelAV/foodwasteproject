angular.module('zeroWasteApp')
    .controller('uploadController', function($scope, $rootScope, $location, ApiService) {
        $rootScope.section = 'upload'
        $scope.addProduct = function() {
            const { name, category, image, price, discount, experyAt, shop } = $scope
            const products = {name, image, price, experyAt }
            ApiService.addProduct({ name, category, image, price, discount, experyAt, shop })
                .then(console.log(products))
        }
        $scope.addShop = function() {

            const { name, category, image, address, lat, lng } = $scope
            console.log({ name, category, image, address, lat, lng })
            ApiService.addShop({ name, category, image, address, lat, lng })
                .then(console.log)
        }

     $scope.removeProduct = function(id) {
       ApiService.removeProduct(id)
      .then(console.log)
    }

    // $scope.getDistanceBetween = function() {
    //   const address1  = 'Carreras y Candi, Barcelona'
    //   const address2 = 'Plaça Reial, Barcelona '
    //   ApiService.getDistanceBetween(address1, address2)
    //             .then(function(response){
    //                 console.log(response)
    //             })
    //     }



      // ****product/shop coordenates****
 
    $scope.getCoordenates = function() {
      const { address } = $scope
      $scope.info = 'your address is now validated'
      ApiService.getCoordenates(address)
                .then(function(response){
                    $scope.lat = response.lat
                    $scope.lng = response.lng
                    return $scope.lat, $scope.lng
                })
        }

    // ***user coordenates *****
const geo = document.getElementById("demo");

$scope.geoFindMe =function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        geo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  $scope.userLatitude = position.coords.latitude  
  $scope.userLongitude = position.coords.longitude;
  return ($scope.userLatitude, $scope.userLongitude)
}

// distance between user location and products
$scope.seeDistance = function() {
  console.log($scope.lat, $scope.lng)
  console.log( $scope.userLatitude, $scope.userLongitude)
var from = new google.maps.LatLng( $scope.lat, $scope.lng);
var fromName = 'Carreras e Candi, Barcelona';
var dest = new google.maps.LatLng( $scope.userLatitude, $scope.userLongitude);
var destName = 'Plaça Reial, Barcelona';

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
    {
        origins: [from, fromName],
        destinations: [destName, destName],
        travelMode: 'WALKING'
    }, callback);

function callback(response, status) {
    if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            console.log(results);
            for (var j = 0; j < results.length; j++) {
                var element = results[j];
                // var distance = element.distance.text;
                // var duration = element.duration.text;
                var from = origins[i];
                var to = destinations[j];
            }
        }
    }
}
}

    })





