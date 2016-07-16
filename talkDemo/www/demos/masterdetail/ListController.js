     angular.module('talkDemo')
          .controller('ListController', [
               '$scope', 'ListService', '$ionicListDelegate',
               function($scope, ListService, $ionicListDelegate) {
                    $scope.data = {
                         shouldShowDelete: false,
                         shouldShowReorder: false,
                         listCanSwipe: true
                    };

                    $scope.edit = function (item) {
                        //$ionicListDelegate.closeOptionButtons();
                        
                        alert('Edit Item: ' + item.id);
                        $ionicListDelegate.$getByHandle('optionslist').closeOptionButtons();
                    };
                    
                    $scope.share = function (item) {
                        // $ionicListDelegate.closeOptionButtons();
                        
                        alert('Share Item: ' + item.id);
                        $ionicListDelegate.$getByHandle('optionslist').closeOptionButtons();
                    };

                    $scope.moveItem = function(item, fromIndex, toIndex) {
                         $scope.items.splice(fromIndex, 1);
                         $scope.items.splice(toIndex, 0, item);
                    };

                    $scope.onItemDelete = function(item) {
                         $scope.items.splice($scope.items.indexOf(item), 1);
                    };

                    $scope.items = ListService.GetItems();


                    $scope.angularItems = ListService.GetAngularItems();

               }
          ]);
