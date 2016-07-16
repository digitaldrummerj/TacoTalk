     angular.module('talkDemo')
          .controller('ViewRawJsonController', [
               '$scope', 'PullToRefreshService', function ($scope, PullToRefreshService) {
                    $scope.contacts = [];

                    PullToRefreshService.GetContacts()
                         .then(function (items) {
                              $scope.contacts = items;
                              console.log(items);
                         });
               } 
          ]);
