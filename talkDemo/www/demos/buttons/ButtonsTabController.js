    angular.module('talkDemo')
    .controller('ButtonsTabController', [
      '$scope', '$ionicPopup', '$ionicActionSheet', '$ionicModal',
      function ($scope, $ionicPopup, $ionicActionSheet, $ionicModal) {
          $scope.data = {};
        $scope.showPopup = function () {
         $ionicPopup.alert({
           title: 'Popup',
           content: 'This is ionic popup alert!'
         });
        };

         $scope.templatePopup = function () { 
             $ionicPopup.show({
                 template: '<input type="password" ng-model="data.wifi">',
                 title: 'Enter Wi-Fi Password',
                 subTitle: 'Please use normal things',
                 scope: $scope,
                 buttons: [
                   { text: 'Cancel' },
                   {
                     text: '<b>Save</b>',
                     type: 'button-positive',
                     onTap: function(e) {
                       if (!$scope.data.wifi) {                         
                         //don't allow the user to close unless he enters wifi password
                          console.log("no password entered!");
                          e.preventDefault();
                       } else {
                         console.log("password entered");
                         return $scope.data.wifi;
                       }
                     }
                   },
                 ]
               });
         };
         
           $scope.showConfirm = function() {
                 var confirmPopup = $ionicPopup.confirm({
                   title: 'Consume Ice Cream',
                   template: 'Are you sure you want to eat this ice cream?'
                 });
                 confirmPopup.then(function(res) {
                   if(res) {
                     console.log('You are sure');
                   } else {
                     console.log('You are not sure');
                   }
                 });
               };
            
               // An alert dialog
               $scope.showAlert = function() {
                 var alertPopup = $ionicPopup.alert({
                   title: 'Don\'t eat that!',
                   template: 'It might taste good'
                 });
                 alertPopup.then(function(res) {
                   console.log('Thank you for not eating my delicious ice cream cone');
                 });
               };
              
        $scope.showActionsheet = function () {
            $ionicActionSheet.show({
              titleText: 'Ionic ActionSheet',
              buttons: [
                {
                  text: 'Facebook'
                },
                {
                  text: 'Twitter'
                },
              ],
              destructiveText: 'Delete',
              cancelText: 'Cancel',
              cancel: function () {
                console.log('CANCELLED');
              },
              buttonClicked: function (index) {
                console.log('BUTTON CLICKED', index);
                return true;
              },
              destructiveButtonClicked: function () {
                console.log('DESTRUCT');
                return true;
              }
            });
        };
    }]);