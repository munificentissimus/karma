angular.module('srvcApp',[])
  .factory('mySrvc',function () {
      return {
        escrever : function(){
          return "palavra";
        }
      }
  });
