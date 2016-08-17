/**
 * Created by Administrator on 2016/7/17.
 */


$(function(){
//选择器点击事件
        $(".proSelector dl").on ( "click" , "dd" , function(){
                $(this).addClass("on").siblings().removeClass("on");
        } ) ;

        $(".proSort a").click ( function(){
                $(this).addClass( "on").siblings(). removeClass( "on" ) ;
        } ) ;

        //$.ajax ( {
        //        type : "get",
        //        url : "http://localhost/tourism/productList.php",
        //        dataType : "json",
        //        success : function (data) {
        //                proList (data , 0 );            //初始化第一页
        //                pageClick ( data);
        //            SortCostAdd(data);
        //        },
        //        error : function (error) {
        //                alert(error);
        //        }
        //} );
    $.getJSON("json/product.json",function(data){
        proList (data , 0 );            //初始化第一页
        pageClick ( data);
        SortCostAdd(data);      //价格从高到低排序
    });

        //页面数据适配方法
        function proList (data , n ){
                $(".proList > li").each(function (index){
                        $(".proList .proImg img").eq(index).attr( "src" , data[index + 6*n ].img);
                        $(".proList .proDesc h3").eq(index).text(data[index + 6*n].title);
                        $(".proList .proDesc .proul li").eq(index).each( function ( sindex){
                                $(data[index +6*n].desc[sindex]).appendTo(".proList .proDesc .proul li");
                        });
                        $(".proList .proDesc p span").eq(index).text( data[index + 6*n].time );
                        $(".proList .proDesc  del i").eq(index).text( data[index + 6*n].pricel );
                        $(".proList .proDesc  em i").eq(index).text( data[index + 6*n].pricer );
                })
        }

      function  pageClick ( data){
              //页脚数字点击
              var li = 0;
              $(".proPage ul li ").click( function(index,ele){
                      li = $(this).index();
                      $(this).addClass("on").siblings().removeClass("on");
                      proList (data , li ) ;

              });
              //下一页点击
              $(".proPage .proNextPage ").click(function(){
                      $(".proPage ul li").eq( li+1).trigger( "click");
                      proList (data , li+1 );
              });
              //最后一页点击
              $(".proPage .proEndPage ").click(function(){
                      $(".proPage ul li:last-child").trigger( "click");
                      proList (data ,  $(".proPage ul li").length - 1 );
              });
              //跳转指定页点击
              $(".proPage .proConfirm ").click(function(){
                      $(".proPage ul li").eq( $( ".proPage span input").val() -1).trigger( "click");
                      proList (data , $( ".proPage span input ").val() -1 ) ;
              })
      }


            function SortCostAdd(data){
                $(".proSortAll").click(function(){
                    proList (data , 0 );            //初始化第一页
                    pageClick ( data);
                });
                    sort(data);
                $(".proSortCostAdd").click(function(){
                    proList (sort(data) , 0 );            //初始化第一页
                    pageClick ( sort(data));
                });
                    sortJian(data);
                $(".proSortCostjian").click(function(){
                    proList (sortJian(data) , 0 );            //初始化第一页
                    pageClick ( sortJian(data));
                });
            }
//价格排序

        function sort(data) {
            var price = [], info = [];
            for (var index = 0; index < data.length; index++) {
                price.push(data[index].pricer);
                info.push(data[index]);
            }
            for (var m = 0; m < price.length; m++) {                     //从大到小
                for (var p = 0; p < price.length; p++) {
                    if (price[p] < price[p + 1]) {
                        var temp = price[p];
                        var t = info[p];
                        price[p] = price[p + 1];
                        info[p] = info[p + 1];
                        price[p + 1] = temp;
                        info[p + 1] = t;
                    }
                }
            }
            return info;
        }
        function sortJian(data) {
            var price = [], info = [];
            for (var index = 0; index < data.length; index++) {
                price.push(data[index].pricer);
                info.push(data[index]);
            }
            for (var m = 0; m < price.length; m++) {                     //从小到大
                for (var p = 0; p < price.length; p++) {
                    if (price[p] > price[p + 1]) {
                        var temp = price[p];
                        var t = info[p];
                        price[p] = price[p + 1];
                        info[p] = info[p + 1];
                        price[p + 1] = temp;
                        info[p + 1] = t;
                    }
                }
            }
            return info;
        }
});
