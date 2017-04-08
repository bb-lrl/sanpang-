$(function(){
     // 购买几件物品
        var x=0;
        var j=1;
        var k=1;
        // 总价钱的计算======== 
        var num1=$('.mtm1').val();
        var num2=$('.mtm2').val();
         var num4=45*num1;
         var num5=45*num2;
         var zong=num4+num5;
         var flag=0;
         var h=($("input[name='checkbox1']:checked").length);
        $('.upp1').click(function(event) {
            var my_boo=$('.ckb1')
            var my_booo=$('.ckb2')
            k++;
            $(this).parent().siblings().val(k);
            num1=k;
            num4=45*num1;
            num10=$(this).parents('.number').siblings('.color_red').text(num4)
            zong=num4+num5;
          if(my_boo.is(':checked') && my_booo.is(':checked')){
             num3=$('.prc').text(zong);num6=$('.qian_b').text(zong)
          }else if(my_boo.is(':checked')){num3=$('.prc').text(num4)
          num6=$('.qian_b').text(num4)}else if(my_booo.is(':checked')){num3=$('.prc').text(num5)
          num6=$('.qian_b').text(num5)}else{num3=$('.prc').text(x)
          num6=$('.qian_b').text(x)}
            return k; 
        });
        $('.downn1').click(function(event) {
              var my_boo=$('.ckb1')
              var my_booo=$('.ckb2')
              k--;
              if(k<=0){k=0;$('.ckb1').prop('checked','');$('.checkbox').prop('checked','')};
              $(this).parent().siblings().val(k);
              num1=k;
              num4=45*num1;
               num10=$(this).parents('.number').siblings('.color_red').text(num4)
              zong=num4+num5;
          if(my_boo.is(':checked') && my_booo.is(':checked')){
             num3=$('.prc').text(zong);num6=$('.qian_b').text(zong)
          }else if(my_boo.is(':checked')){num3=$('.prc').text(num4)
          num6=$('.qian_b').text(num4)}else if(my_booo.is(':checked')){num3=$('.prc').text(num5)
          num6=$('.qian_b').text(num5)}else{num3=$('.prc').text(x)
          num6=$('.qian_b').text(x)}
              return k; 
        });
        $('.ckb1').click(function(event) {
              var myin=$(this)
              var myin_box=$('.ckb2')
              num3=$('.prc').text(num4)
              num6=$('.qian_b').text(num4);
           if($(this).is(':checked') && $('.ckb2').is(':checked')){
                      num3=$('.prc').text(zong);num6=$('.qian_b').text(zong)
                      $('.ckb2').click(function(event) {
                          var myinn=$(this);
                           if($(this).is(':checked')){
                              $('.prc').text(zong);
                              $('.qian_b').text(zong)
                           }else{$('.prc').text(num4);$('.qian_b').text(num4)}
                      });
            }else if($('.ckb2').is(':checked')){
                num3=$('.prc').text(num5)
                num6=$('.qian_b').text(num5);
            }else if($('.ckb1').is(':checked')){
                num3=$('.prc').text(num4)
                num6=$('.qian_b').text(num4);
            }else{
                num3=$('.prc').text(x)
                num6=$('.qian_b').text(x);
                $('.ckb2').click(function(event) {
                          var myinn=$(this);
                           if($(this).is(':checked')){
                              $('.prc').text(num5);
                              $('.qian_b').text(num5)
                           }else{$('.prc').text(x);$('.qian_b').text(x)}
                      });
            }
        });
        $('.upp2').click(function(event) {
            var my_boo=$('.ckb1')
            var my_booo=$('.ckb2')
            j++;
            $(this).parent().siblings().val(j);
            num2=j;
            num5=45*num2;
             num10=$(this).parents('.number').siblings('.color_red').text(num5)
             zong=num4+num5;
          if(my_booo.is(':checked') && my_boo.is(':checked')){
             num3=$('.prc').text(zong)
             num6=$('.qian_b').text(zong)
          }else if(my_boo.is(':checked')){num3=$('.prc').text(num4)
          num6=$('.qian_b').text(num4)}else if(my_booo.is(':checked')){num3=$('.prc').text(num5)
          num6=$('.qian_b').text(num5)}else{num3=$('.prc').text(x)
          num6=$('.qian_b').text(x)}
            return j; 
        });
        $('.downn2').click(function(event) {
              var my_boo=$('.ckb1')
            var my_booo=$('.ckb2')
              j--;
              if(j<=0){j=0;$('.ckb2').prop('checked','');$('.checkbox').prop('checked','')};
              $(this).parent().siblings().val(j);
              num2=j;
              num5=45*num2;
               num10=$(this).parents('.number').siblings('.color_red').text(num5)
               zong=num4+num5;
              if(my_booo.is(':checked') && my_boo.is(':checked')){
             num3=$('.prc').text(zong)
             num6=$('.qian_b').text(zong)
          }else if(my_boo.is(':checked')){num3=$('.prc').text(num4)
          num6=$('.qian_b').text(num4)}else if(my_booo.is(':checked')){num3=$('.prc').text(num5)
          num6=$('.qian_b').text(num5)}else{num3=$('.prc').text(x)
          num6=$('.qian_b').text(x)}
              return j; 
        });
        $('.ckb2').click(function(event) {
              var myin=$(this)
              num3=$('.prc').text(num5)
              num6=$('.qian_b').text(num5);
           if($(this).is(':checked') && $('.ckb1').is(':checked')){
                      num3=$('.prc').text(zong);num6=$('.qian_b').text(zong)
                      $('.ckb1').click(function(event) {
                          var myinn=$(this);
                           if($(this).is(':checked')){
                              $('.prc').text(zong);
                              $('.qian_b').text(zong)
                           }else{$('.prc').text(num5);$('.qian_b').text(num5)}
                      });
            }else if($('.ckb1').is(':checked')){
                num3=$('.prc').text(num4)
                num6=$('.qian_b').text(num4);
            }else if($('.ckb2').is(':checked')){
                num3=$('.prc').text(num5)
                num6=$('.qian_b').text(num5);
            }else{
                num3=$('.prc').text(x)
                num6=$('.qian_b').text(x);
                $('.ckb1').click(function(event) {
                          var myinn=$(this);
                           if($(this).is(':checked')){
                              $('.prc').text(num4);
                             $('.qian_b').text(num4)
                           }else{$('.prc').text(x);$('.qian_b').text(x)}
                      });
            }
        });
        
    $('.delet').click(function(event) {
        $(this).parent().hide();
    });
    // 选择多个
    $('.checkbox').click(function(){
          $("input[name='checkbox1']").prop('checked',$(this).is(':checked'));
           if($(this).is(':checked')){
            num3=$('.prc').text(zong)
            num6=$('.qian_b').text(zong)
          }else{
            num3=$('.prc').text(x)
            num6=$('.qian_b').text(x)
          }
          
        });
        $("input[name='checkbox1']").click(function() {
          var j=($("input[name='checkbox1']:checked").length);  
          var checked = j==$("input[name='checkbox1']").length
          $('.checkbox').prop('checked',checked);
        });
        $('.all_del').click(function(event) {
            $('.cart_box ul li').hide();
            $('.cart_box ul .li1').show();
            $('.prc').text('0')
            $('.all_choose').prop('checked','')
        });
        $('.all_choose').click(function(event) {
              $("input[name='checkbox1']").prop('checked',$(this).is(':checked'));
               $("input.checkbox").prop('checked',$(this).is(':checked'));
               if($(this).is(':checked')){
                  num3=$('.prc').text(zong)
                  num6=$('.qian_b').text(zong)
                }else{
                  num3=$('.prc').text(x)
                  num6=$('.qian_b').text(x)
                }
        });
})