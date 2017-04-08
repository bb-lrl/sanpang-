$(function(){
    // 鼠标移上大盒子的效果
     $('.hc_goodscrow li').mouseenter(function(event) {
         $(this).css('box-shadow','1px 1px 4px 0px #999999')
     }).mouseleave(function(event) {
         $(this).css('box-shadow','none')
     });
     $('.hc_goodsline li').mouseenter(function(event) {
         $(this).css('box-shadow','1px 1px 4px 0px #999999')
     }).mouseleave(function(event) {
         $(this).css('box-shadow','none')
     });
    // 立即购买和加入购物车的效果
   $('.buy_now').mouseenter(function(event) {
       $(this).css('background','red')
       $(this).css('color','#fff')
       $(this).css('border','1px solid red')
   }).mouseleave(function(event) {
       $(this).css('background','#f5f5f5')
       $(this).css('color','#666')
       $(this).css('border','1px solid #d9d9d9')
   });
   $('.buy_car').mouseenter(function(event) {
       $(this).css('background','#835a31')
       $(this).css('color','#fff')
       $(this).css('border','1px solid #835a31')
   }).mouseleave(function(event) {
       $(this).css('background','#f5f5f5')
       $(this).css('color','#666')
       $(this).css('border','1px solid #d9d9d9')
   });
   // 点击切换商品的排列效果
   $('.crow_box').click(function(event) {
       $('.hc_goodscrow').show().siblings('.hc_goodsline').hide();
       $('this').css('backgroundImg','url(../img/list_ico12.png) no-repeat center center ');
       $(this).css('backgroundColor','#358000');
       $(this).css('backgroundPosition','0 -19px');
       $(this).css('border','1px solid #358000')
        $('.line_box').css('backgroundImg','url(../img/list_ico13.png) no-repeat center center ');
       $('.line_box').css('backgroundColor','#f7f7f7');
       $('.line_box').css('backgroundPosition','0 0px');
        $('.line_box').css('border','1px solid #ccc')
   });
   $('.line_box').click(function(event) {
       $('.hc_goodsline').show().siblings('.hc_goodscrow').hide();
       $('this').css('backgroundImg','url(../img/list_ico13.png) no-repeat center center ');
       $(this).css('backgroundColor','#358000');
       $(this).css('backgroundPosition','0 -19px');
       $(this).css('border','1px solid #358000')
        $('.crow_box').css('backgroundImg','url(../img/list_ico12.png) no-repeat center center ');
       $('.crow_box').css('backgroundColor','#f7f7f7');
       $('.crow_box').css('backgroundPosition','0 0px');
        $('.crow_box').css('border','1px solid #ccc')
       
   });
   // 产品的选择
   
 $('.hc_titler').click(function(event) {
   var input = document.getElementsByTagName("input");
    for(var i=0;i<input.length ;i++ )
    {
        if(input[i].type=="checkbox" && input[i].checked)
            input[i].checked = false;
    }
 });
  
$('.choose,.choose_t,.choose_w,.choose_b').click(function(event) {
  $(this).parent().siblings().children('input').attr('checked',false);
});
//升序降序
$('.sort_box').click(function(event) {
    $(this).toggleClass('sort_box_t');
});

});
