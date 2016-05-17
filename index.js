(function () {
    "use strict";
    angular
        .module('app')
        .controller('IndexController', function ($scope) {
            $scope.chartData = [
                {
                    name: 'Web',
                    y: 10
                }, {
                    name: 'TV',
                    y: 20
                }, {
                    name: 'Réseaux sociaux',
                    y: 10
                }, {
                    name: 'Radio',
                    y: 10
                }, {
                    name: 'Presse',
                    y: 50
                }
            ];
            $scope.chartConfig = {

                options: {
                    chart: {
                        type: 'pie',
                        animation: true
                    },
                    tooltip: {
                        style: {
                            padding: 10,
                            fontWeight: 'bold'
                        }
                    }
                },
                colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
                loading: false,
                xAxis: {
                    currentMin: 0,
                    currentMax: 20,
                    title: {text: 'values'}
                },
                useHighStocks: false
            };
        });
})();
