/**
* Created by Administrator on 2016/7/18.
*/
$(function(){
//放大图
    $(".pdetailImg ul li").click( function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".bigImg img ").attr("src" , $(this).children("img").attr("src"));

        $(".mouseImg img").attr("src" , $(this).children("img").attr("src"));
    });
    $(".bigImg").on("mousemove" , function(e){
        //console.log(e.pageX);
        var x = e.pageX-$(this).offset().left - 25  ;
        var y = e.pageY-$(this).offset().top - 15   ;
        if(x<0){
                x = 0;
        }else if(x>450){
                x = 450;
        }
        if(y<0){
                y = 0;
        }else if(y>270){
                y = 270;
        }
        $( ".shadow").css({
                "display" : "block",
                "left" : x+"px",
                "top" : y+"px"
        });
        $( ".mouseImg ").css({
                "display" : "block"
        });
        $( ".mouseImg img ").css({
                "position" : "relative",
                "left" : -x*5+"px",
                "top" : -y*5+"px"
        })
    });
    $(".bigImg ").on("mouseleave" , function(){
        $( ".shadow").css("display","none");
        $( ".mouseImg").css("display","none");
    });
//加减按钮

    $(".jianFa").click(function(index){
        var n = $(this).next("i").text();
        $(this).next("i").text(n-1);
        if(n <= 1 ){
            $(this).attr("disabled","disabled");
        }
    });
    $(".jiaFa").click(function(){
        var n = parseInt($(this).prev("i").text());
        $(this).prev("i").text(n+1);
        $(this).siblings("button").removeAttr("disabled");
    });
//行程安排选择按钮
    $(".pdetailInfo >ul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    })



});