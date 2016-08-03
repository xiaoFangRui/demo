/**
 * Created by Administrator on 2016/7/20.
 */

var myApp = angular.module("myApp",['ngRoute']);


myApp.constant("Routes",{
    purse:"/purse",
    safety:"/safety",
    select:"/select"
});

myApp.config(["$routeProvider","Routes",function($routeProvider,Routes){
    $routeProvider
        .when(Routes.purse,{
            templateUrl:"views/purse.html",
            controller:"purse"
        })
        .when(Routes.safety,{
            templateUrl:"views/safety.html",
            controller:"safety"
        })
        .when(Routes.select,{
            templateUrl:"views/select.html",
            controller:"select"
        })
        .otherwise({
            redirectTo:Routes.purse
        })
}]);