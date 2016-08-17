/**
 * Created by Administrator on 2016/7/20.
 */

myApp.controller("safety",function($scope){
    $(".inav ul li").eq(1).addClass("on").siblings().removeClass("on");
});