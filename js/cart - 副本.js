$(function(){
     // 购买几件物品
        var i=1;
        var j=1;
        // 总价钱的计算======== 
        var num1=$('.mtm1').val();
        var num2=$('.mtm2').val();
         var num4=45*num1+45*num2;
        // var num3=$('.prc').text(num4);
        
    $('.upp1').click(function(event) {
        i++;
        $(this).parent().siblings().val(i);
        num2=i;
        num4=45*num1+45*num2;
        num3=$('.prc').text(num4);
        
    });
    $('.downn1').click(function(event) {
        i--;
        if(i<=0){i=0;};
        $(this).parent().siblings().val(i);     
         num2=i;
         num4=45*num1+45*num2;
         num3=$('.prc').text(num4);
    });
    $('.upp2').click(function(event) {
        j++;
        $(this).parent().siblings().val(j);
        num1=j;
        num4=45*num1+45*num2;
        num3=$('.prc').text(num4);
        
    });
    $('.downn2').click(function(event) {
        j--;
        if(j<=0){j=0;};
        $(this).parent().siblings().val(j);     
         num1=j;
         num4=45*num1+45*num2;
         num3=$('.prc').text(num4);
    });
    $('.delet').click(function(event) {
        $(this).parent().hide();
    });
    // 选择多个
    $('.checkbox').click(function(){
          $("input[name='checkbox1']").prop('checked',$(this).is(':checked'));
        });
        $("input[name='checkbox1']").click(function() {
          var j=($("input[name='checkbox1']:checked").length);  
          var checked = j==$("input[name='checkbox1']").length
          $('.checkbox').prop('checked',checked);
        });
        $('.all_del').click(function(event) {
            $('.cart_box ul li').hide();
            $('.cart_box ul .li1').show();
        });
        $('.all_choose').click(function(event) {
              $("input[name='checkbox1']").prop('checked',$(this).is(':checked'));
               $("input.checkbox").prop('checked',$(this).is(':checked'));
        });
})