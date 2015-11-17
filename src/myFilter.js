angular
  .module('filterApp',[])
  .filter('myFilter',function () {
    return function (t) {
      return t.length;
    };
  });
