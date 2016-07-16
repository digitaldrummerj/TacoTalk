angular.module('talkDemo')
    .controller('NetworkInfoController', [
        '$scope', '$rootScope', '$ionicPlatform', '$cordovaNetwork',
        function ($scope, $rootScope, $ionicPlatform, $cordovaNetwork) {
            $ionicPlatform.ready(function () {
                if (!ionic.Platform.isWebView()) {
                    alert('Network Info Only Works on Device');
                }
            });
            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                alert('Network Online');
                console.log('network online', networkState);
            })

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                alert('Network Offline');
                console.log('network offline', networkState);
            })

            $scope.getNetworkInfo = function () {
                $ionicPlatform.ready(function () {
                    if (ionic.Platform.isWebView()) {
                        $scope.type = $cordovaNetwork.getNetwork();

                        $scope.isOnline = $cordovaNetwork.isOnline();

                        $scope.isOffline = $cordovaNetwork.isOffline();

                    } else {
                        alert('Only Works on Device');
                    }
                });
            }

            $scope.getNetworkInfo();
        }]);