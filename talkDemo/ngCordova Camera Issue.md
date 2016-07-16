The camera docs say to inject $cordovaCamera but when I do that it throws an injector error.

## Error

```
Error: [$injector:unpr] Unknown provider:  $cordovaCameraProvider <-  $cordovaCamera <- CameraController
http://errors.angularjs.org/1.4.3/$injector/unpr?p0=%20%24cordovaCameraProvider%20%3C-%20%20ordovaCamera%20%3C-%20CameraController
    at http://localhost:8100/lib/ionic/js/ionic.bundle.js:13380:12
    at http://localhost:8100/lib/ionic/js/ionic.bundle.js:17574:19
    at Object.getService [as get] (http://localhost:8100/lib/ionic/js/ionic.bundle.js:17721:39)
    at http://localhost:8100/lib/ionic/js/ionic.bundle.js:17579:45
    at getService (http://localhost:8100/lib/ionic/js/ionic.bundle.js:17721:39)
    at invoke (http://localhost:8100/lib/ionic/js/ionic.bundle.js:17753:13)
    at Object.instantiate (http://localhost:8100/lib/ionic/js/ionic.bundle.js:17770:27)
    at http://localhost:8100/lib/ionic/js/ionic.bundle.js:22326:28
    at self.appendViewElement (http://localhost:8100/lib/ionic/js/ionic.bundle.js:56883:24)
    at Object.switcher.render (http://localhost:8100/lib/ionic/js/ionic.bundle.js:54995:41)
```


### My Controller code that is throwing the error.  All I have to do in add $cordovaCamera.

```
angular.module('talkDemo')
    .controller('CameraController', [
        '$scope', '$ionicPlatform', ' $cordovaCamera',
        function ($scope, $ionicPlatform, $cordovaCamera) {
}]);
```

### Snippet of package.json for plugins and platforms

```
  "cordovaPlugins": [
    "cordova-plugin-device",
    "cordova-plugin-console",
    "cordova-plugin-whitelist",
    "cordova-plugin-splashscreen",
    "com.ionic.keyboard",
    "cordova-plugin-battery-status",
    "cordova-plugin-camera"
  ],
  "cordovaPlatforms": [
    "android",
    "ios"
  ]
```
### bower.json

```
 "devDependencies": {
    "ionic": "driftyco/ionic-bower#1.2.4"
  },
  "dependencies": {
    "ngCordova": "^0.1.24-alpha"
  }
```  

### Ionic Info

```
Cordova CLI: 6.0.0
Gulp version:  CLI version 0.4.0
Gulp local:   Local version 3.9.1
Ionic Version: 1.2.4-nightly-1917
Ionic CLI Version: 1.7.14
Ionic App Lib Version: 0.7.0
OS: Windows 8.1
Node Version: v5.7.0
```