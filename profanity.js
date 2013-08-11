var Period = angular.module('Profanity', []).
    config(function($routeProvider) {
        $routeProvider.
          when('/:dictionary', {controller:QuoteCtrl, templateUrl:'quote.html'}).
          otherwise({redirectTo:'/'});
      });

function MenuCtrl($scope, $location) {
    $scope.items = [
        {name: 'home', uri: '/', active: $location.url() == '/'},
        {name: 'sex', uri: '/sex', active: $location.url() == '/sex'},
        {name: 'terror', uri: '/terror', active: $location.url() == '/terror'},
    ];
}

function QuoteCtrl($scope, $location, $routeParams, $http) {
    var dictionary = $routeParams.dictionary == "terror" ? 'terror.json' : 'sex.json';
    $http.get(dictionary).success(function(data){
        $scope.dictionary = data;
        $scope.generateQuote();
    });
    $scope.generateQuote = function (args) {
        terms = [];
        $scope.quote = angular.forEach($scope.dictionary.terms, function(value, key) {
            var index = Math.floor(Math.random() * value.length);
            terms.push(value[index]);
        })
        $scope.quote = terms.join(" ");
    }
};
