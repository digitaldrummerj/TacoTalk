angular.module('talkDemo')
    .controller('BarcodeScannerController', [
        '$scope', '$rootScope', '$ionicPlatform', '$cordovaBarcodeScanner',
        function ($scope, $rootScope, $ionicPlatform, $cordovaBarcodeScanner) {

            $ionicPlatform.ready(function () {
                if (!ionic.Platform.isWebView()) {
                    alert('Barcode Scanner Only Works on Device');
                }
            });
            $scope.scan = function () {
                $ionicPlatform.ready(function () {
                    if (ionic.Platform.isWebView()) {
                        $cordovaBarcodeScanner
                            .scan()
                            .then(function (barcodeData) {
                                // Success! Barcode data is here
                                console.log('barcode', barcodeData);
                                $scope.scanResult = barcodeData;
                            }, function (error) {
                                // An error occurred
                            });
                    } else {
                        alert('Only Works on Device');
                    }
                });
            }
        }]);