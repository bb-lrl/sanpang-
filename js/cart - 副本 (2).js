$(function(){
     // 购买几件物品
        var x=0;
        var j=1;
        var k=1;
        var i=1;
        var l=1;
        // 总价钱的计算======== 
        var num1=$('.mtm1').val();
        var num2=$('.mtm2').val();
         var num4=45*num1;
         var num5=45*num2;
         var flag=0
        $('.upp1').click(function(event) {
             if(flag==0){
                  k++;
            $(this).parent().siblings().val(k);
            num1=k;
            num4=45*num1;
            i=k;
             }else{k=i;}
            
        });
        $('.downn1').click(function(event) {
            if(flag==0){
              k--;
              if(k<=0){k=0;};
              $(this).parent().siblings().val(k);
              num1=k;
              num4=45*num1;
              i=k;
            }    
        });
        $('.ckb1').click(function(event) {
                i=k;
              var myin=$(this)
              num3=$('.prc').text(num4);
           if($(this).is(':checked')){
                  $('.upp1').click(function(event) {
                      i++;
                      $(this).parent().siblings().val(i);
                      num1=i;
                      num4=45*num1
                      num3=$('.prc').text(num4);
                      k=i
                  });
                  $('.downn1').click(function(event) {
                      i--;
                      if(i<=0){i=0;};
                      $(this).parent().siblings().val(i);     
                       num1=i;
                       num4=45*num1;
                       num3=$('.prc').text(num4);
                       k=i
                  });
                flag=1;
            }else{

                 flag=1;
                num3=$('.prc').text(x);
                $('.upp1').click(function(event) {
                      // i++;
                      // $(this).parent().siblings().val(i);
                      // num1=i;
                      // alert(i)
                      num4=45*num1
                      num3=$('.prc').text(x);
                      k=i
                      
                  });
                  $('.downn1').click(function(event) {
                      i--;
                      if(i<=0){i=0;};
                      $(this).parent().siblings().val(i);     
                       num1=i;
                       num4=45*num1;
                       num3=$('.prc').text(x);
                       k=i
                  });
                 
            }
           
           
        });
        //  $('.upp2').click(function(event) {
        //      if(flag==0){
        //           j++;
        //     $(this).parent().siblings().val(j);
        //     num1=j;
        //     num5=45*num2;
        //      }
            
        // });
        // $('.downn2').click(function(event) {
        //     if(flag==0){
        //       j--;
        //       if(j<=0){j=0;};
        //       $(this).parent().siblings().val(j);
        //       num1=j;
        //       num5=45*num2;
        //     }     
        // });
        // $('.ckb2').click(function(event) {
        //         l=j+1;
        //       var myin=$(this)
        //       num3=$('.prc').text(num5);
        //     if($(this).is(':checked')){
        //           $('.upp2').click(function(event) {
        //               l++;
        //               $(this).parent().siblings().val(l);
        //               num1=l;
        //               num5=45*num1
        //               num3=$('.prc').text(num5);
        //           });
        //           $('.downn2').click(function(event) {
        //               l--;
        //               if(l<=0){l=0;};
        //               $(this).parent().siblings().val(l);     
        //                num1=l;
        //                num5=45*num1
        //                num3=$('.prc').text(num5);
        //           });
        //           flag=1;
        //     }else{num3=$('.prc').text(0.00);}
        //     l-=1
        // });
    
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