angular.module('talkDemo')
    .controller('CameraController', [
        '$scope', '$ionicPlatform', ' $cordovaCamera',
        function ($scope, $ionicPlatform, $cordovaCamera) {
            
//             $scope.takeImage = function () {
//                 $ionicPlatform.ready(function () {
//                     var options = {
//                         quality: 80,
//                         destinationType: Camera.DestinationType.DATA_URL,
//                         sourceType: Camera.PictureSourceType.CAMERA,
//                         allowEdit: true,
//                         encodingType: Camera.EncodingType.PNG,
//                         targetWidth: 250,
//                         targetHeight: 250,
//                         popoverOptions: CameraPopoverOptions,
//                         saveToPhotoAlbum: false
//                     };
// 
//                     $cordovaCamera.getPicture(options).then(function (imageData) {
//                         $scope.srcImage = "data:image/jpeg;base64," + imageData;
//                     }, function (err) {
//                         // error
//                     });
//                 });
//             }
        }]);