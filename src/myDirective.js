angular.module('directiveApp',[])
  .directive('myDirective',function () {
    return {
      restrict : 'E',
      replace  : true,
      template : '<h1>Soma={{ 1 + 1}}</h1>'
    }
  });
