describe("MyController",function(){
  beforeEach(module('ctrlApp'));
  beforeEach(module('srvcApp'));

  var $controller;
  var mySrvc;
  var $rootScope;
  var $scope;

  beforeEach(inject(function(_$controller_, _$rootScope_, _mySrvc_){
    $controller = _$controller_;
    mySrvc = _mySrvc_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));

  it("se senha 'anderson' resultado deve ser true",function () {
    var controller = $controller('myCtrl',{$scope:$scope, mySrvc: mySrvc});

    $scope.senha = 'anderson';
    expect($scope.resultado()).toEqual(true);
  });

  it("deve retornar texto   'palavra'", function () {
    expect(mySrvc.escrever()).toBe('palavra');
  });

});
