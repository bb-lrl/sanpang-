// JavaScript Document
$(function(){
	//==========banner===========
	    var sx = 0;             // 虚拟一个索引值顺序*******
        var timer = null;       // 定时器
        ///////////
        // 指示器模块 //
        ///////////
        $('.banner ol li').click(function(event) {
            $(this).addClass('current').siblings().removeClass();
            var index = $(this).index()
            $('.banner ul').stop().animate({ left:-100*index+'%' }, 500);      // 注意百分比和单位。

            sx = index              // 用户点击那个指示器是不确定的，数据需要同步
        });        //////////////
        // 用户点击左右箭头 //
        //////////////

        $('.banner .next').click(function(event) {
            sx++
            if(sx>4){ sx=0 }
            $('.banner ol li').eq(sx).addClass('current').siblings().removeClass();   // 指示器工作
            $('.banner ul').stop().animate({ left: -100*sx+'%' }, 500)      // 注意百分比和单位。
        });
        $('.banner .prev').click(function(event) {
            sx--
            if(sx<0){ sx=4 }
            $('.banner ol li').eq(sx).addClass('current').siblings().removeClass();   // 指示器工作
            $('.banner ul').stop().animate({ left: -100*sx+'%' }, 500)       // 注意百分比和单位。
        });


        ///////////////////
        // 自动播放模块  //
        ///////////////////
        function func(){            // 抽离出指令
            sx++
            if(sx>4){ sx=0 }      // 虚拟索引值，取值 0~4，如果大于4，变成0
            $('.banner ol li').eq(sx).addClass('current').siblings().removeClass();   // 指示器工作
            $('.banner ul').stop().animate({ left:  -100*sx+'%' }, 500)     // 注意百分比和单位。
        }
        timer = setInterval(func, 5000 )            


        // 清除定时器
        $('.banner').hover(function() {
            $('.banner .prev,.banner .next').fadeIn(500)
            clearInterval(timer)
        }, function() {
            $('.banner .prev,.banner .next').fadeOut(500)
            clearInterval(timer)
            timer = setInterval(func, 5000 )
        });
		//=================ban========================
        $('.ban div').hover(function() {
            $(this).stop().fadeTo(300,0.7)
        }, function() { 
            $('.ban div').stop().fadeTo(300,1)
        });
		//=================精选========================
		var nub = 0;
        var timer2 = null;

        // 用户操作的模块
        $('.three-left ul li').mouseenter(function(event) {
            $(this).addClass('current').siblings().removeClass();   // 指示器工作
            var index = $(this).index();                            // 切换图，需要通过当前的索引值关联
            $('.box .main-box').stop().animate({ top: index * (-423) }, 500)

            nub = index    // 数据同步
        })

        /*----------------------------------------------------*/
        // 自动播放模块       
        function auto(){            // 抽离出指令
            nub++
            if(nub>5){ nub=0 }      // 虚拟索引值，取值 0~5，如果大于5，变成0

            $('.three-left ul li').eq(nub).addClass('current').siblings().removeClass();   // 指示器工作
			$(this).eq(nub).children().addClass('current').siblings().removeClass();
            $('.box .main-box').stop().animate({ top: nub * (-423) }, 500)
        }
        timer2 = setInterval(auto, 5000 )
        
        // 清除定时器
        $('.three .bd').hover(function() {
            clearInterval(timer2)
        }, function() {
            clearInterval(timer2)
            timer2 = setInterval(auto, 5000 )
        });
		
//===========================================================	
	   $('.aside dl').mouseenter(function(event) {
            $(this).children(".aside-box").hide().show();
            $(this).children('dt,dd').css('background','#fff');
            $(this).find('a').css('color','#666');
            $(this).find('i').css('background-position','0 -25px')  
        })
		$(".aside dl").mouseleave(function(e) {
            $(this).children(".aside-box").hide();
            $(this).children('dt').css('background','#559b0d');
            $(this).children('dd').css('background','#60a411');
            $(this).find('a').css('color','#fff');
            $(this).find('i').css('background-position','0 0')   
        });
        $('.aside a').mouseenter(function(){
            $(this).css('color','red')
        }).mouseleave(function(){
            $(this).css('color','#666')
        })
//=====================右边的导航======================================	
		$(".fix ul li").mouseenter(function(e) {
            $(this).children("div ,em").hide().show()
        }).mouseleave(function(e) {
            $(this).children("div,em").hide()
        });
//=======================返回顶部===========================================	
		$(window).scroll(function(){
			var winSt = $(window).scrollTop()
			if( winSt > 30){
				$('.totop').css({"visibility":"visible"})
			}
			else{$('.totop').css({"visibility":"hidden"})}
		})
            // 点击
            $('.totop').click(function(event) {
                
                $('html,body').stop().animate({scrollTop:0}, 500)

            });

//=======================关闭侧边栏===========================================	
		$(".close").click(function(e) {
            $(".fix ").animate({right:-35},500)
			$(".open").animate({right:0},500)
        });
		$(".open").click(function(e) {
            $(".fix ").animate({right:0},500)
			$(".open").animate({right:-35},500)
        });
		
// 点击图片放大缩小，trasnform部分

		
		
		
	})