describe('Testando uma directive',function () {
  var $compile, $rootScope;

  beforeEach(module('directiveApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it("description", function () {
    // Compila um pedaço de HTML contendo a directiva
    var element = $compile("<my-directive></my-directive>")($rootScope);
    // dispara todos os observadores, então a expressão é avaliada
    $rootScope.$digest();
    //Checa se o elemento compilado contem o template
    expect(element.html()).toContain("Soma=2");
  });
});
