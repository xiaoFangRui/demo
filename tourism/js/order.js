/**
 * Created by Administrator on 2016/7/22.
 */

$(function(){

//加减按钮
    $(".orderInfoLeftCircuit .jianFa").click(function(index){
        var n = $(this).next("input").val()-1;
        $(this).next("input").val(n);

        setNum();
        if(n < 1 ){
            $(this).attr("disabled","disabled");
        }
    });
    $(".orderInfoLeftCircuit .jiaFa").click(function(){

        var n = parseInt($(this).prev("input").val())+1;
        $(this).prev("input").val(n);
        $(this).siblings("button").removeAttr("disabled");
        setNum();
/*

        var m =  $(".orderInfoCircuitTrip").siblings("input").val();
        $(".orderInfoCircuitTrip i").text(2699*m);
        var i =  $(".orderInfoCircuitHourse").siblings("input").val();
        $(".orderInfoCircuitHourse i").text(3000*i);

        //合计变化
        $(".orderInfoLeftTotal p i").text(parseInt($(".orderInfoCircuitTrip i ").text())+parseInt($(".orderInfoCircuitHourse i ").text()));
*/

    });

    function setNum(){
        //数值变化
        var m =  $(".orderInfoCircuitTrip").siblings("input").val();
        $(".orderInfoCircuitTrip i").text(2699*m);
        var i =  $(".orderInfoCircuitHourse").siblings("input").val();
        $(".orderInfoCircuitHourse i").text(3000*i);
        //合计变化
        $(".orderInfoLeftTotal p i").text(parseInt($(".orderInfoCircuitTrip i ").text())+parseInt($(".orderInfoCircuitHourse i ").text()));
        //右侧订单信息
        $(".orderInfoRightTrip i").text(m);
        $(".orderInfoRightTrip span").text(2699*m);
        $(".orderInfoRightNum").text(i);
        $(".orderInfoRightHourse i").text(3000*i);
        $(".orderInfoRightTotal i").text($(".orderInfoLeftTotal p i ").text());

    }

});


