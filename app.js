(function () {
    'use strict';
    angular.module('app', [
            'ngRoute',
            'ngCookies',
            'ngSanitize',
            'highcharts-ng'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/index', {
                    templateUrl: 'template-index.html',
                    controller: 'IndexController',
                    controllerAs: 'indexCtrl'
                })
                .otherwise({
                    redirectTo: '/index'
                });
        })
        .config(['highchartsNGProvider', function (highchartsNGProvider) {
            highchartsNGProvider.lazyLoad();

            highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHCHART, "maps/modules/map.js", "mapdata/custom/world.js"]);

            highchartsNGProvider.basePath("/js/");
        }])
        .run();
})();
