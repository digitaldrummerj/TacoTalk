  angular.module('talkDemo')
    .controller('MenuController', [
      '$scope',
      '$ionicSideMenuDelegate',
      '$ionicModal', 
      function($scope, $ionicSideMenuDelegate, $ionicModal) {              
        $ionicModal.fromTemplateUrl('demos/modal/modal.html', function (modal) {
          $scope.modal = modal;
          }, 
          {
            animation: 'slide-in-up'
          });
      }]);
