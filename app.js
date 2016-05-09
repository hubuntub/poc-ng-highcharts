(function () {
    'use strict';
    angular.module('app', [
            'ngRoute',
            'ngCookies',
            'ngSanitize'
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
        .run();
})();
