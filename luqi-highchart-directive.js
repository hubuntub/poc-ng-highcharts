(function () {
    'use strict';

    angular
        .module("app")
        .directive("luqiHighchartDirective", luqiHighchartDirective);

    luqiHighchartDirective.$inject = ['$templateCache', '$compile', '$timeout'];

    function luqiHighchartDirective($templateCache, $compile, $timeout) {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: link,
            controller: controller
        };

        function link(scope, element) {
            Highcharts.chart(element[0], {
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(200, 200, 255)']
                        ]
                    },
                    type: 'pie'
                },
                title: {
                    text: scope.title
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    data: scope.data
                }]
            });
            Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: {
                        cx: 0.5,
                        cy: 0.3,
                        r: 0.7
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                    ]
                };
            });
        }

        controller.$inject = ['$scope'];

        function controller($scope) {
            $scope.paramGraph = {};
        }
    }

})();
