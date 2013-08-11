var Period = angular.module('Profanity', []);

function MenuCtrl($scope) {
    $scope.fetchQuote = function (args) {
        return "the quote"
    }
};

function QuoteCtrl($scope, $http) {
    $http.get('sex.json').success(function(data){
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
