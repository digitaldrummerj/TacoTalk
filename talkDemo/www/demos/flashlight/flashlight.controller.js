angular.module('talkDemo')
    .controller('FlashlightController', [
        '$scope', '$rootScope', '$ionicPlatform', '$cordovaFlashlight',
        function ($scope, $rootScope, $ionicPlatform, $cordovaFlashlight) {

            $scope.data = {
                on: false,
                off: false,
                toggled: false,
                available: false
            }


            $ionicPlatform.ready(function () {
                if (!ionic.Platform.isWebView()) {
                    alert('Flashlight Only Works on Device');
                }
            });

            $scope.getIsAvailable = function () {
                $ionicPlatform.ready(function () {
                    if (ionic.Platform.isWebView()) {
                        $cordovaFlashlight.available().then(function (availability) {
                            $scope.data.available = availability; // is available
                        }, function () {
                            // unavailable
                            $scope.data.available = false; // is not available
                        });
                    }
                });
            };

            $scope.turnOn = function () {
                $ionicPlatform.ready(function () {
                    if (ionic.Platform.isWebView()) {
                        $cordovaFlashlight.switchOn()
                            .then(
                                function (success) { $scope.data.on = true;/* success */ },
                                function (error) { /* error */ }
                                );
                    }
                });
            }

            $scope.turnOff = function () {
                $ionicPlatform.ready(function () {
                    if (ionic.Platform.isWebView()) {
                        $cordovaFlashlight.switchOff()
                            .then(
                                function (success) {
                                    $scope.data.off = true;
                                },
                                function (error) { /* error */ }
                                );
                    }
                });
            }

            $scope.toogle = function () {
                $ionicPlatform.ready(function () {
                    if (ionic.Platform.isWebView()) {
                        $cordovaFlashlight.toggle()
                            .then(
                                function (success) { $scope.data.toggled = true;/* success */ },
                                function (error) { /* error */ }
                                );
                    }
                });
            }
        }]);