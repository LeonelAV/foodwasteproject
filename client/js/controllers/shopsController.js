angular.module('zeroWasteApp')
    .controller('shopsController', function($scope, $rootScope, $location, ApiService, toastr) {
        $rootScope.section = 'shops'


        $scope.addShop = function() {
            const { name, category, image, address, lat, lng } = $scope
            ApiService.addShop({ name, category, image, address, lat, lng })
                .then(msg => {
                    toastr.success('Upload products in your shop', 'Shop Created!')
                })
            $location.path('/uploadProducts/')
        }


        $scope.getCoordenates = function() {
            const { address } = $scope
            $scope.info = 'your address is now validated'
            ApiService.getCoordenates(address)
                .then(function(response) {
                    $scope.lat = response.lat
                    $scope.lng = response.lng
                    return $scope.lat, $scope.lng
                })
        }


            })

// .directive('googleplace', function() {
//     return {
//         require : 'ngModel',
//         link : function(scope, element, attrs, model) {
//             var options = {
//                 types : [],
//             };
//             scope.gPlace = new google.maps.places.Autocomplete(element[0],
//                     options);
 
//             google.maps.event.addListener(scope.gPlace, 'place_changed',
//                     function() {
//                         scope.$apply(function() {
//                             model.$setViewValue(element.val());
//                         });
//                     });
//         }
//     };
// });
