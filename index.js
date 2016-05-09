(function () {
    "use strict";
    angular
        .module('app')
        .controller('IndexController', function ($scope) {
            $scope.chartConfig = {

                options: {
                    chart: {
                        type: 'bar'
                    },
                    tooltip: {
                        style: {
                            padding: 10,
                            fontWeight: 'bold'
                        }
                    }
                },
                series: [{
                    data: [10, 15, 12, 8, 7]
                }],
                title: {
                    text: 'Hello'
                },
                loading: false,
                xAxis: {
                    currentMin: 0,
                    currentMax: 20,
                    title: {text: 'values'}
                },
                useHighStocks: false,
                size: {
                    width: 400,
                    height: 300
                }
            };
        });
})();
