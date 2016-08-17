/**
 * Created by Administrator on 2016/7/15.
 */


$(function(){
//轮播图
        var n = 0;
        var time = null;
        $(" .inum  li ").mouseover(function(){
                $(this).addClass("on").siblings().removeClass("on");
               var index = $(this).index();
                n=index;
                $(".iimg a").css("opacity",0);
                $(".iimg a ").eq(index).css("opacity",1);
        });

        $(".iright").click(function(){  //右按钮
                n++;
                autoPlay();
        });
        $(".ileft").click(function(){   //左按钮
                n--;
                autoPlay()
        });
        time = setInterval(function(){  //自动轮播
                n++;
                autoPlay();
        },2000);
        $(".ibanner").hover(function(){ //鼠标划入划出
                clearInterval(time);
                $(".ileft").fadeIn();
                $(".iright").fadeIn();
        },function(){
                time = setInterval(function(){
                        n++;
                        autoPlay();
                },2000);
                $(".ileft").fadeOut();
                $(".iright").fadeOut();
        });

        function autoPlay(){
                if(n == $(".inum li ").length){
                        n = 0;
                }
                if(n == -1){
                        n = $(".inum li").length - 1;
                }
                $(" .inum  li ").eq(n).addClass("on").siblings().removeClass("on");
                $(".iimg a").css("opacity",0).eq(n).css("opacity",1);
        }


  //热搜文字
        $.getJSON("json/index.json",function(data){
                hotSearch(data);    //热搜文字
                trip(data);         //之旅图文信息
        });
  //      $.ajax({
  //              type : "get",
  //              url : "http://localhost/tourism/hotSearch.php",
  //              dataType : "json",
  //              success : function(data){
  //                      hotSearch(data);
  //              },
  //              error : function(error){
  //                      alert(error);
  //              }
  //      });
        function hotSearch(data){
                $(data.code).each(function(index){
                        $(".istip").append("<a href='#' search='"+data.num[index]+"'>"+data.code[index]+"</a>");

                        $(".istip a").on("click" , function(){
                                $(".isinput input").val($(this).html());
                        });
                        if(  $(" .istip a").eq(index).attr("search") > 5){  //标红显示
                                $(".istip a ").eq(index).addClass("on");
                        }
                });
        }
//之旅图文信息
//        $.ajax({
//                type : "get",
//                url : "http://localhost/tourism/index.php",
//                dataType : "json",
//                success : function(data){
//                        trip(data);
//                },
//                error : function(error){
//                        alert(error);
//                }
//        });
        function trip(data){
                $(data.discovery).each(function(index){
                        $(".disci").append("<div class='discoImg'><img src='"+data.discovery[index].img+"'/><div><p>"+data.discovery[index].desc1+"</p><p>"+data.discovery[index].desc2+"</p></div></div>")
                });
                $(data.driveTrip).each(function(index){
                        $(".drive").append("<div class='discoImg'><img src='"+data.driveTrip[index].img+"'/><div><p>"+data.driveTrip[index].desc1+"</p><p>"+data.driveTrip[index].desc2+"</p></div></div>")
                });
                $(data.seaTrip).each(function(index){
                        $(".seaT").append("<div class='discoImg'><img src='"+data.seaTrip[index].img+"'/><div><p>"+data.seaTrip[index].desc1+"</p><p>"+data.seaTrip[index].desc2+"</p></div></div>")
                });
                $(".seaT .discoImg").eq(0).addClass("seaImg");
                $(data.pilgrimage).each(function(index){
                        $(".pilg").append("<div class='discoImg'><img src='"+data.pilgrimage[index].img+"'/><div><p>"+data.pilgrimage[index].desc1+"</p><p>"+data.pilgrimage[index].desc2+"</p></div></div>")
                });
                $(data.istrate).each(function(index){
                        $(".istraImg").append("<div><img src='"+data.istrate[index].img+"'/><div class='istraDesc'><img src='"+data.istrate[index].icon+"' /><p>"+data.istrate[index].desc+"</p><span>"+data.istrate[index].data+"</span></div></div>")
                })
        }


        //签证国家点击切换
        getCountry("1");
        $(".ivisaCountry li").click(function(){
                $(this).addClass("on").siblings().removeClass("on");
                var index = $(this).attr("id");
                  getCountry(index);


        });

        function getCountry(count){
            $.getJSON("json/country.json",{"country":count},function(data){
                    console.log(count);
                countryView(data[count]);
            });

                //$.ajax({
                //        type : "get",
                //        url : "http://localhost/tourism/ivisa.php",
                //        dataType : "json",
                //        data:{
                //                "country" : count
                //        },
                //        success: function(data){
                //                console.log(data);
                //                countryView(data);
                //        },
                //        error : function(error){
                //                alert(error);
                //        }
                //})
        }
        function countryView(data){
                $(".ivisaImg").empty();
                $(data).each(function(index){
                        $(".ivisaImg").append("<li><img src='"+data[index].img+"'/><div><p>"+data[index].country+"</p><p>"+data[index].desc1+"</p><p>"+data[index].desc2+"</p></div></li>")
                })
        }
});