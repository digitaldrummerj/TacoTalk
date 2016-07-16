     angular.module('talkDemo')
          .controller('PullToRefreshController', [
               '$scope', 'PullToRefreshService', function($scope, PullToRefreshService) {
                    $scope.contacts = [];

                    PullToRefreshService.GetContacts()
                         .then(function(items) {
                              $scope.contacts = items;
                              console.log(items);
                    });

                    $scope.doRefresh = function() {
                         PullToRefreshService.GetNewContact().then(function(item) {
                              $scope.contacts = $scope.contacts.concat(item);
                         }).finally(function() {
                              $scope.$broadcast('scroll.refreshComplete');
                         });
                    };
               }
          ]);
