    angular.module('talkDemo')
        .directive('dividerCollectionRepeat', ['$parse', function($parse) {
          return {
            priority: 1001,
            compile: compile
          };

          function compile(element, attr) {
            var height = attr.itemHeight || '75';
            var itemExpr = attr.collectionRepeat.split(' ').shift();
            attr.$set('itemHeight', itemExpr + '.$$ionLetter ? 40 : (' + height + ')');
        
            var children = element.children().attr('ng-hide', itemExpr + '.$$ionLetter');
            element.prepend(
              '<div ng-show="' + itemExpr + '.$$ionLetter" class="item item-divider" ' +
                'ng-bind="' + itemExpr + '.$$ionLetter" style="height:100%;">' +
              '</div>'
            );
        
            return function postLink(scope, element, attr) {        
              scope.$watch(itemExpr + '.$$ionLetter', function(letter) {
                element.toggleClass('item-divider', !!letter);
              });        
            };
          }
        }]);