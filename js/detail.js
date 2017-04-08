$(function(){
    
    // 购买几件物品
    var i=0;
    $('.up').click(function(event) {
        i++;
        $('.buy_me input').val(i);
        
    });
    $('.down').click(function(event) {       
        i--;
        if(i<=0){i=0;};
        $('.buy_me input').val(i);           
    });
    // 选择地址
    $(document).on('click','.land_hide li',function(event) {
        var myText=$(this).text();       
        $('.land_box span').text(myText)      
    });
    $('.land_box span').click(function(event) {
        $('.land_hide').show();
    });
    $('.land_hide').mouseleave(function(event) {
        $(this).hide();
    });
    // 滑动链接
    $('.li_b a').mouseenter(function(event) {
        $(this).parent().siblings().children('p').css('color','red')
    }).mouseleave(function(event) {
        $('.li_t p').css('color','#333')
    });  
    // 滑动显示
    $('.nav-aside .all_shopper').mouseenter(function(event) {
        $('.aside').css('display','block')
    });
    $('.nav').mouseleave(function(event) {
        $('.aside').css('display','none')
    })    
})

