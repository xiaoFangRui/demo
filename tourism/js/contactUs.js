/**
 * Created by Administrator on 2016/7/21.
 */

$(function(){

    $(".contactNav li").click(function(){
        var index = $(this).index();

        $(this).addClass("on").siblings().removeClass("on");
        $(".contactInfo > p").text($(this).text());
        $(".contactInfo > div").eq(index).css("display","block").siblings("div").css("display","none");
    });



    //嵌入百度地图

    var map = new BMap.Map("allMap");
    var point = new BMap.Point(116.3299245,40.062509);
    map.centerAndZoom(point,16);
    var marker = new BMap.Marker(new BMap.Point(116.3365295,40.062559));  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.enableScrollWheelZoom(true);       //启用滚轮放大缩小



});