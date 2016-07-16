
angular.module('talkDemo')
     .factory('ListService', [function() {
          var items = [
               { id: 0 },
               { id: 1 },
               { id: 2 },
               { id: 3 },
               { id: 4 },
               { id: 5 },
               { id: 6 },
               { id: 7 },
               { id: 8 },
               { id: 9 }
          ];


          var angularItems = [
               { id: 'Angular Item 1' },
               { id: 'Angular Item 2' },
               { id: 'Angular Item 3' },
               { id: 'Angular Item 4' },
               { id: 'Angular Item 5' },
               { id: 'Angular Item 6' }
          ];
          return {
               GetItems: function() {
                    return items;
               },
               GetAngularItems: function() {
                    return angularItems;
               },
               GetItem: function(index) {
                         return items[index];
               }
          }
     }]);