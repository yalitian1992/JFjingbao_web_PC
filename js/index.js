$(function(){

        // 获取屏幕尺寸
        
        //下载地址
        $("#iphone").on("click", function(){
            window.open("https://itunes.apple.com/cn/app/%E9%9B%86%E5%88%86%E7%AB%9E%E5%AE%9D/id1253939312?mt=8")
        })
        $("#android").on("click", function(){
            window.open("http://action.ihaveu.com/downloadapp/card/android/CardGame.apk")
        })
        // 视频播放控制
        $(".movie").css({
                    width: $(window).width(),
                    height: $(window).height()
                });
        $(".video-button").on("click",function(){
            $(".movie").fadeIn(400);
            var src = "media/" + $(this).data("videoname") + ".mp4"
            $("video").attr("src", src)
            console.log($("video")[0].autoplay)
            $("video")[0].play();
            $(".movie .movie-kuang").css({
                        height: $("video").height()
                    });

            // if ( $("#music")[0].paused == false) {
            //     $("#music")[0].pause();
            //     $(".musiccontor").children("span").removeClass('musicplay')
            // }



        })        
        $(".movie-close-button").on("click",function(){
            $(".movie").fadeOut(400);
            $("#diamond-story")[0].pause();
        })

        // 第二屏手风琴
        $(".feature ul li").on("mouseenter", function(){
            $(this).siblings().addClass("active")
            $(this).addClass("hover")
        })

        $(".feature ul li").on("mouseleave", function(){
            $(this).siblings().removeClass("active")
            $(this).removeClass("hover")
        })

        /*基础要点*/

        $(".pointList .points").on("mouseenter", function(){
            var idx = $(".pointList .points").index(this)
            idx = idx + 1;
            $(".pointsDetails").stop(false, true).fadeIn(500)
            $(".pointsDetails li:nth-child(" +  idx  + ")").stop(false, true).show()
        })
        $(".pointList .points").on("mouseleave", function(){
            var idx = $(".pointList .points").index(this)
            idx = idx + 1;
            $(".pointsDetails").stop(false, true).fadeOut(500)
            $(".pointsDetails li:nth-child(" +  idx  + ")").stop(false, true).hide()
        })
        
        /*计谋介绍*/ 
        // 卡牌列表
        $(".attack").on("click", function(){
            $(".sliderPop").addClass("active")
            $(".attack-list").show();
            $(".defanse-list").hide();
            $(".control-list").hide();
        })
        $(".defanse").on("click", function(){
            $(".sliderPop").addClass("active")
            $(".attack-list").hide();
            $(".defanse-list").show();
            $(".control-list").hide();
        })
        $(".control").on("click", function(){
            $(".sliderPop").addClass("active")
            $(".attack-list").hide();
            $(".defanse-list").hide();
            $(".control-list").show();
        })
        //卡牌列表开关
        $(".sliderPop-switch").on("click", function(){
            $(".sliderPop").toggleClass("active")
        })

        //单张某种类型卡牌详情
        $(".look-attack-list").on("click", function(){
            $(".carddetails").fadeIn()
            $("#attackSlider").fadeIn()
            $("#defanseSlider").fadeOut()
            $("#controlSlider").fadeOut()
        })
        $(".look-defanse-list").on("click", function(){
            $(".carddetails").fadeIn()
            $("#attackSlider").fadeOut()
            $("#defanseSlider").fadeIn()
            $("#controlSlider").fadeOut()
        })
        $(".look-control-list").on("click", function(){
            $(".carddetails").fadeIn()
            $("#attackSlider").fadeOut()
            $("#defanseSlider").fadeOut()
            $("#controlSlider").fadeIn()
        })



        $(".btn-closeCarddetails").on("click", function(){
            $(".trick .carddetails").fadeOut();
        })
        var cardList = [[
            {
               type: "进攻类卡牌",   //类型
               rarity: "普通",    //稀有度
               target: "单体",    //目标
               name: "催能符", //名字
               describe: "与对手比拼最大秘钥，秘钥数字大者夺取对方30%秘钥。",    //
               attack: 45,  //攻击
               defense: 2, //防御
               control: 2, //控制
               cooling: 3,  //冷却
               
            },{

            }
        ],[],[]]
})