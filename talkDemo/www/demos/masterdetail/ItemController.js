     angular.module('talkDemo')
          .controller('ItemController', [
               '$scope', '$stateParams', 'ListService',
               function ($scope, $stateParams, ListService) {
                    $scope.item = ListService.GetItem($stateParams.index);
               }
          ]);
