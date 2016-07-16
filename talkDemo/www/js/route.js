angular.module('talkDemo')
    .config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('menu', {
                    url: "/menu",
                    abstract: true,
                    templateUrl: "demos/sidemenu/menu.html",
                    controller: 'MenuController'
                })
                .state('menu.tabs', {
                    url: "/tab",
                    abstract: true,
                    views: {
                        'menuContent': {
                            templateUrl: "demos/tabs/tabs.html"
                        }
                    }
                })
                .state('menu.tabs.buttons', {
                    url: "/buttons",
                    views: {
                        'buttons-tab': {
                            templateUrl: "demos/buttons/buttons.html",
                            controller: 'ButtonsTabController'
                        }
                    }
                })
                .state('menu.tabs.colors', {
                    url: "/colors",
                    views: {
                        'colors-tab': {
                            templateUrl: "demos/colors/colors.html"
                        }
                    }
                })
                .state('menu.tabs.list', {
                    url: "/list",
                    views: {
                        'list-tab': {
                            templateUrl: "demos/masterdetail/list.html",
                            controller: 'ListController'
                        }
                    }
                })
                .state('menu.tabs.item', {
                    url: "/item/:index",
                    views: {
                        'list-tab': {
                            templateUrl: "demos/masterdetail/item.html",
                            controller: "ItemController"
                        }
                    }
                })
                .state('menu.tabs.form', {
                    url: "/form",
                    views: {
                        'form-tab': {
                            templateUrl: "demos/forms/form.html"
                        }
                    }
                })
                .state('menu.keyboard', {
                    url: "/keyboard",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/keyboard/keyboard.html"
                        }
                    }
                })
                .state('menu.batterystatus', {
                    url: "/batterystatus",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/batterystatus/batterystatus.html",
                            controller: "BatteryStatusController"
                        }
                    }
                })
                .state('menu.barcodescanner', {
                    url: "/barcodescanner",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/barcodescanner/barcodescanner.html",
                            controller: "BarcodeScannerController"
                        }
                    }
                })
                .state('menu.networkinfo', {
                    url: "/networkinfo",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/networkinfo/network.html",
                            controller: "NetworkInfoController"
                        }
                    }
                })
                .state('menu.flashlight', {
                    url: "/flashlight",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/flashlight/flashlight.html",
                            controller: "FlashlightController"
                        }
                    }
                })

                .state('menu.camera', {
                    url: "/camera",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/camera/camera.html",
                            controller: "CameraController"
                        }
                    }
                })

                .state('menu.viewrawjson', {
                    url: "/viewrawjson",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/viewrawjson/viewrawjson.html",
                            controller: "ViewRawJsonController"
                        }
                    }
                })
                .state('menu.slidebox', {
                    url: "/slidebox",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/slidebox/slidebox.html",
                            controller: 'SlideboxController'
                        }
                    }
                })
                .state('menu.pulltorefresh', {
                    url: "/pulltorefresh",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/pulltorefresh/pulltorefresh.html",
                            controller: 'PullToRefreshController'
                        }
                    }
                })
                .state('menu.platformicons', {
                    url: "/platformicons",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/platformbasedicons/platformbasedicons.html"
                        }
                    }
                })
                .state('menu.spinners', {
                    url: "/spinners",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/spinners/spinners.html"
                        }
                    }
                })
                .state('menu.about', {
                    url: "/about",
                    views: {
                        'menuContent': {
                            templateUrl: "demos/about/about.html"
                        }
                    }
                })
                .state('menu.collectionrepeat', {
                    url: "/collectionrepeat",
                    abstract: true,
                    views: {
                        'menuContent': {
                            templateUrl: "demos/collectionrepeat/collectionrepeattabs.html"
                        }
                    }
                })
                .state('menu.collectionrepeat.ngrepeatperf', {
                    url: '/ngrepeatperf',
                    views: {
                        'cr-ngrepeatperf-tab': {
                            templateUrl: "demos/collectionrepeat/ngrepeatperf/ngrepeatperf.html",
                            controller: "NgRepeatPerfController"
                        }
                    }
                })
                .state('menu.collectionrepeat.crbasic', {
                    url: '/crbasic',
                    views: {
                        'cr-basic-tab': {
                            templateUrl: "demos/collectionrepeat/basic/collectionrepeatbasic.html",
                            controller: "CollectionRepeatBasicController"
                        }
                    }
                })
                .state('menu.collectionrepeat.crwithdivider', {
                    url: '/crwithdivider',
                    views: {
                        'cr-divder-tab': {
                            templateUrl: "demos/collectionrepeat/withdivider/collectionrepeatdivider.html",
                            controller: "CollectionRepeatDividerController"
                        }
                    }
                })
                .state('menu.collectionrepeat.crabout', {
                    url: '/crabout',
                    views: {
                        'cr-about-tab': {
                            templateUrl: "demos/collectionrepeat/collectionrepeatabout.html"
                        }
                    }
                })
                .state('menu.cards', {
                    url: "/cards",
                    abstract: true,
                    views: {
                        'menuContent': {
                            templateUrl: "demos/cards/cardtabs.html"
                        }
                    }
                })
                .state('menu.cards.cardabout', {
                    url: '/cardabout',
                    views: {
                        'card-about-tab': {
                            templateUrl: "demos/cards/cardabout.html"
                        }
                    }
                })
                .state('menu.cards.cardbasic', {
                    url: '/cardbasic',
                    views: {
                        'card-basic-tab': {
                            templateUrl: "demos/cards/cardbasic.html"
                        }
                    }
                })
                .state('menu.cards.cardlist', {
                    url: '/cardlist',
                    views: {
                        'card-list-tab': {
                            templateUrl: "demos/cards/cardlist.html"
                        }
                    }
                })
                .state('menu.cards.cardshowcase', {
                    url: '/cardshowcase',
                    views: {
                        'card-showcase-tab': {
                            templateUrl: "demos/cards/cardshowcase.html"
                        }
                    }
                });

            $urlRouterProvider.otherwise("menu/tab/buttons");
        }
    ]);
