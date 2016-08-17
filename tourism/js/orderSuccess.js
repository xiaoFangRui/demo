/**
 * Created by Administrator on 2016/7/26.
 */

$(function(){

    var time=null;
    time = setInterval(function(){
       var n= $(".orderSuccessAuto i ").text()-1;
        if(n == 0){

            location.href = "index.html";
            clearInterval(time);
        }
        $(".orderSuccessAuto i").text(n);

    },1000)

});