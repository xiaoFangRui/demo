/**
 * Created by Administrator on 2016/7/20.
 */

myApp.controller("purse",function($scope,info){
    $(".inav ul li").eq(0).addClass("on").siblings().removeClass("on");

    var eyeFlag = true;
    info.dataInfo("http://iwen.wiki/zhichenshop/purseData.php")
        .success(function(data){
            adpterView(data);
           $scope.eyeBtn = function(){
               if(eyeFlag){
                   adpterView(data);
               }else{
                   eyeHide();
               }
           }

        })
        .error(function(error){
            console.log(error);
        });

    function adpterView(data){
        $scope.username = data.username;
        $scope.money = data.mymoney;
        $scope.symoney = data.symoney;
        $scope.djmoney = data.djmoney;
        if(data.dd){
            $(".noRecord").css("display","none");
            $scope.jilus = data.dd;
        }
        eyeFlag = false;
    }
    function eyeHide(){
        $scope.money = "******";
        $scope.symoney = "**";
        $scope.djmoney = "*****";
        eyeFlag = true;
    }
});