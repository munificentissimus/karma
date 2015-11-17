angular
  .module('ctrlApp',['srvcApp'])
  .controller('myCtrl', ['$scope', 'mySrvc', function($scope, mySrvc){
    $scope.senha = '';
    $scope.resultado = function(){
      if ($scope.senha === 'anderson'){
        return true;
      }
      return false;
    };
  }]);
