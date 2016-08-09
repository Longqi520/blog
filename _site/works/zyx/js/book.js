$(function(){
    var $header = $('.aoyou-head-right').find('.right-li');
    $header.hover(function () {
        $(this).addClass('now');
        $(this).find('.subnav').removeClass('hidden');
    }, function () {
        $(this).removeClass('now');
        $(this).find('.subnav').addClass('hidden');
    });

    //基本信息显示和隐藏
    $('.detail-btn').click(function(){
        var stat = $(this).attr('stat');
        if(stat=="open"){
            $(this).siblings('.date-section').hide();
            $(this).find('b').text('展开基本信息');
            $(this).find('i').removeClass('up');
            $(this).attr('stat','close');
        }else{
            $(this).siblings('.date-section').show();
            $(this).find('b').text('隐藏基本信息');
            $(this).find('i').addClass('up');
            $(this).attr('stat','open');
        }

    })
    //单选效果
    $(".radio").click(function(){
        var t = $(this);
        t.siblings().removeClass('checked')
        t.addClass('checked');

    });
    $('.checkbox').click(function(){
        var t = $(this);
        if(t.hasClass('checked')){
            t.removeClass('checked');
            return false;
        }else{
            t.addClass('checked');
            return false;
        }
    });
    $(".selectbox select").bind("change",function(){
        if($(this).val()==0){
            return;
        }
        else{
            $(".selectbox b").text($(this).val());
        }
    });
    $('.hideBox .radio').click(function(){
        var t = $(this);
        var name = t.find('input').attr('name');
        if(name=='now'){
            $('#cxr-infor').show();
        }else{
            $('#cxr-infor').hide();
        }
    });
    $('.hidebtn .radio').click(function(){
        var t = $(this);
        var name = t.find('input').attr('name');
        if(name=='now'){
            t.parent('.hidebtn').siblings('.laster').css('display','inline-block');
        }else{
            t.parent('.hidebtn').siblings('.laster').css('display','none');
        }
    })
    $(".common-user").click(function(){
        var s = $(this).find('.selected');
        if(s.css('display') == 'none'){
            s.css('display','block')
        }else{
            s.css('display','none')
        }
    });
    $('.icon-warning').hover(function(){
        var x = $(this).offset().left;
        var y = $(this).offset().top;
        $('#warnnong-tips').css({'display':'block','position':'absolute','top':y+30,'left':x-18})
        var name = $(this).data('name');
        switch(name){
            case 'danjianc':
                $('#warnnong-tips').find('.current-boxCont').css('width','200px').html('<p>1.儿童默认不占床，不占票</p> <p>2.儿童入住酒店需遵循酒店入住政策</p>');
                break;

        }

    },function(){
        $('#warnnong-tips').css({'display':'none'})
    })
    $('.passportdropdwn').hover(function(){
        $(this).find('.current-box').show();
    },function(){
        $(this).find('.current-box').hide();
    });
    $('.passport-box .tabnav li').click(function(){
        var $t =$(this)
        var index = $(this).index();
        $t.addClass('now').siblings().removeClass('now');
        $t.parent('.tabnav').next('.port').find('img').eq(index).show().siblings().hide();
    });
    $('.tabnav2 li').click(function(){
        $(this).addClass('now').siblings().removeClass('now');
        var index = $(this).index();
        $(this).parents('.infor-content').find('.notice-con').eq(index).removeClass('hidden').siblings('.notice-con').addClass('hidden');
    })
    $('.form input').css('color','#666666').focus(function(){
        var t = $(this);
        var text = t.attr('value');
        t.css('color','#000000');
        t.val('');
    });
    $('.form input').blur(function() {
        var $parent = $(this).parent('.inputbox');
        $parent.find(".errortips").remove();
        //验证用户名
        if ($(this).data('name') == 'username') {
            if (this.value == "" || this.value.length < 6) {
                var errorMsg = '请输入正确用户名.';
                $parent.find('input').addClass('error');
                $parent.append('<span class="errortips">' + errorMsg + '<i class="xmark"></i></span>');
            }
        }
        //邮箱验证
        if( $(this).data('name')=='email' ){
            if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                var errorMsg = '请输入正确的E-Mail地址.';
                $parent.append('<span class="errortips">'+errorMsg+'<i class="xmark"></i></span>');
            }
        }
    });
    $('#loginStyle .radio').click(function(){
        var name = $(this).find('input').attr('name');
        if(name == 'nomal'){
            $('#nomal').show();
            $('#phone').hide();
        }else{
            $('#nomal').hide();
            $('#phone').show();
        }
    });
    $('.sub-tt .link').click(function(){
        var t = $(this);
        t.parents('.sub-tt').addClass('hidden');
        t.parents('.infor-box').find('.more').removeClass('hidden');

    });
    $('.remove').click(function(){
        var t = $(this);
        t.parents('.infor-box').find('.sub-tt').removeClass('hidden');
        t.parents('.infor-box').find('.more').addClass('hidden');
    })
    $('.close-btn').click(function(){
        $('.shade,.loginbox').hide()
    })
    $('.citydown').click(function(event){
        var x = $(this).offset().left;
        var y = $(this).offset().top+33;
        var name = $(this).data('name');
        $('#departCityDiv').css({'display':'block','top':y,'left':x});
        event.stopPropagation();
    });
    $('.tt-tabs .hot-tt').click(function(event){
        $(this).addClass('now').siblings().removeClass('now');
        var index = $(this).index();
        $(this).parents('.links').find('.items .item').eq(index).removeClass('hidden').siblings().addClass('hidden');
        event.stopPropagation();
    });
    $(document).on('click',function(){
        $(".moreblock").hide();
    })
    //订单支付页面js
    $('.titlebox .link').click(function(){
        $(this).parents('.titlebox').next().show();
    });
    $('.paycon .close-btn').click(function(){
        $(this).parents('.paycon').hide()
    })
});