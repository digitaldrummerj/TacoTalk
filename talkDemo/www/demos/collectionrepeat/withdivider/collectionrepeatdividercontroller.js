    angular.module('talkDemo')
    .controller('CollectionRepeatDividerController', 
        ['$scope', '$ionicScrollDelegate', 'filterFilter', '$http', 'CollectionRepeatService',
        function($scope, $ionicScrollDelegate, filterFilter, $http, CollectionRepeatService) {
             CollectionRepeatService.getData().then(function (contacts) {
                    $scope.contacts = contacts.sort(function (a, b) {
                        return a.last_name > b.last_name ? 1 : -1;                    
                    });
                });
                
        $scope.scrollTop = $ionicScrollDelegate.scrollTop.bind($ionicScrollDelegate);  
    }]);
