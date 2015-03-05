// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in app.js
app = angular.module('starter', ['ionic','WykopApp']);
app.config([
    "$httpProvider",
    function ($httpProvider ) {
        delete $httpProvider.defaults.headers.post['Content-Type'];
        $httpProvider.interceptors.push('HttpInterceptor');

        // $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] ='*';
    }
]);
app.run(function ($ionicPlatform,$rootScope) {
    $ionicPlatform.ready(function () {
        $rootScope['API_KEY'] = 'jyjfHW51At';
        $rootScope['API_SECRET'] = 'nNcWytRy1P';
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.search', {
                url: "/search",
                views: {
                    'menuContent': {
                        templateUrl: "templates/search.html"
                    }
                }
            })

            .state('app.pm', {
                url: "/pm",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pm_list.html",
                        controller: 'PmListCtrl'
                    }
                }
            })
            .state('app.details', {
                url: "/pm/:author",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pm_details.html",
                        controller: 'PmDetailsCtrl'
                    }
                }
            })
            .state('app.playlists', {
                url: "/playlists",
                views: {
                    'menuContent': {
                        templateUrl: "templates/playlists.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.single', {
                url: "/playlists/:playlistId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/playlist.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
       $urlRouterProvider.otherwise('/app/pm');
    });

angular.module('WykopApp',[]);