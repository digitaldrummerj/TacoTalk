
  angular.module('talkDemo')
    .controller("NgRepeatPerfController", ['$scope', 'CollectionRepeatService', '$ionicScrollDelegate',
        function ($scope, CollectionRepeatService, $ionicScrollDelegate) {
             CollectionRepeatService.getData().then(function (contacts) {
                 console.log(contacts);
                    $scope.contacts = contacts.sort(function (a, b) {
                        return a.last_name > b.last_name ? 1 : -1;                    
                    });
                });
         
        $scope.scrollTop = $ionicScrollDelegate.scrollTop.bind($ionicScrollDelegate);
    }]);