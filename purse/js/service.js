/**
 * Created by Administrator on 2016/7/20.
 */

myApp.factory("info",function($http){
   var infoData = function(url){
       return $http({
           method:"get",
               url:url
       })
   };
    return {
        dataInfo : function(url){
            return infoData(url);
        }
    }
});