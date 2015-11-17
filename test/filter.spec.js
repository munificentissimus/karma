describe("Teste do filtro len",function(){
  beforeEach(module('filterApp'));

  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));


  it("deve retornar 8 quando passado 'anderson'",function () {
    var lenFilter = $filter('myFilter');
    //console.log("lenFilter('anderson') -> " + lenFilter('anderson'));
    expect(lenFilter('anderson')).toEqual(8);
  });


});
