    angular.module('talkDemo')
    .controller('SlideboxController', 
        ['$scope', '$ionicSlideBoxDelegate',
        function($scope, $ionicSlideBoxDelegate) {
          $scope.nextSlide = function() {
            $ionicSlideBoxDelegate.next();
          }             
        }
     ]);              
