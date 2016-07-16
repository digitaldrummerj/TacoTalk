angular.module('talkDemo.directives', [])
     .directive('phoneicon', [
          function() {
               return {
                    restrict: 'E',
                    replace: true,
                    scope: false,
                    template: '<i class="icon"></i>',
                    compile: function (element, attrs) {
                         var icon;

                         if (ionic.Platform.isAndroid()) {
                              icon = "ion-android-call";
                         }
                         else if (ionic.Platform.isIOS()) {
                              icon = "ion-ios-telephone";
                         } else {
                              icon = "ion-speakerphone";
                         }
                         angular.element(element[0]).addClass(icon);
                    }
               };
          }
     ]);