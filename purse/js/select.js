/**
 * Created by Administrator on 2016/7/20.
 */

myApp.controller("select",function($scope){
    $(".inav ul li").eq(2).addClass("on").siblings().removeClass("on");
});