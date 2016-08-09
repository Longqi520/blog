var productInfo = {
    PageInit: function () {
        //跑马灯
        startmarquee(25, 25, 700);
        //轮播图片
        ImgShuffling();
        setWindowsScroll();
        //ti显示和隐藏
        tipsShow();
        popLunBo();
        $("img[data-original]").lazyload();
    }
}
$(function(){
    productInfo.PageInit();
    //产品等级
    $('.product-box-stars').hover(function () {
        $(this).find('.product-box-stars-tips').show();
    }, function () {
        $(this).find('.product-box-stars-tips').hide();
    });
    //下拉数字选择
    $('.selectdown').click(function(e){
        $(this).addClass('z-index');
        $('.downbox').hide();
        $(this).find('.downbox').show();
        e.stopPropagation();
    })
    $('.downbox .listnum').click(function(e){
        $(this).addClass('num-select').siblings().removeClass('num-select');
        var num = $(this).text();
        $(this).parents('.selectdown').removeClass('z-index').find('input').val(num);
        $(this).parent('.downbox').hide();
        e.stopPropagation();
    })
    //$('.downbox').mouseleave(function(){
    //    $(this).hide();
    //})
    //日历弹出
    $('#startDate').click(function(){
        var top = $(this).offset().top+40;
        var left = $(this).offset().left;
        $('#dbdate').show().css({'top':top,'left':left});
    })
    $('.close-btn').click(function(){
        $('#dbdate').hide();
    })

    $('.arrowbox span').mouseenter(function(){
        var par =  $(this).parents('.inforbox');
        par.addClass('infor-show').find('ul').removeClass('hide');
        par.find('.icon-black-arrowdown').addClass('up').attr('stat','open')

    })
    $('.inforbox').mouseleave(function(){
        $(this).removeClass('infor-show').find('ul').addClass('hide');
        $(this).find('.icon-black-arrowdown').removeClass('up').attr('stat','close')

    })
    //酒店房型显示和隐藏
    $('.panel-hide ').click(function(){
        var stat = $(this).attr('stat');
        if(stat == 'close'){
            $(this).parent().prev('.table-fangxing').find('tr:gt(1)').addClass('hidden');
            $(this).find('b').text('展开全部房型');
        }else{
            $(this).parent().prev('.table-fangxing').find('tr:gt(1)').removeClass('hidden')
            $(this).find('b').text('收起全部房型');
        }
    })
    // 门票详情显示和隐藏
    $('.panel-hide').click(function(){
        var stat = $(this).attr('stat');
        var t = $(this);
        var n = t.parents('li').data('name');
        if(stat == 'close'){
            t.find('.arrowDown-blue').addClass('up');
            t.parents('li').next('.detail').slideDown().removeClass('hidden');
            t.attr('stat','open');

        }else{
            t.find('.arrowDown-blue').removeClass('up');
            t.parents('li').next('.detail').slideUp();
            t.attr('stat','close');
        }
    })
    $('.detail-infor-box .close-btn').click(function(){
        var name =$(this).data('name');
        $("#"+name).trigger("click");
    })
    //日历tips显示和隐藏features-list
    $('.calendar td').hover(function(){
        $(this).find('.current-box').show();
    },function(){
        $(this).find('.current-box').hide()
    })
    //弹出层显示和隐藏
    $('.popup').click(function(){
        var name = $(this).data('name');
        $('.layout-mask').show();
        switch(name)
        {
            case 'jdpop':
                $('#jdpop').show();
                break;
            case 'jppop':
                $('#jppop').show();
                break;
        }

    });
    $('.maskclose,.close-btn').click(function(){
        $('.layout-mask,.pop-box,.hotel-gallery-box').hide()
    })

    //酒店图片弹出层显示和隐藏
    $('.hotel-img').click(function(){
        $('.layout-mask').show();
        $('.hotel-gallery-box').show();
    })
    $('.featureshow .icon-sarrowdown').click(function(){
        var stat = $(this).attr('stat');
        var t = $(this);
        if(stat == 'close'){
            t.addClass('up');
            $(this).parent().prev('.features-list').css('height','auto')
            t.attr('stat','open');

        }else{
            t.removeClass('up');
            $(this).parent().prev('.features-list').css('height','502px')
            t.attr('stat','close');
        }


    })
    //出发城市显示和隐藏
    $('#starcity').hover(function(){
        //var x = $(this).offset().left;
        //var y = $(this).offset().top+40;
        $(this).addClass('cityhover');
        $('.startcity').css({'display':'block'})
    },function(){
        $(this).removeClass('cityhover');
        $('.startcity').css({'display':'none'})
    })
    //微信code显示和隐藏
    $('.dropdown').hover(function(){

        $(this).addClass('z-index').find('.dropdownbox').show();
    },function(){
        $(this).removeClass('z-index').find('.dropdownbox').hide();
    })
    $(document).on('click',function(){
        $(".downbox").hide();
        $('.selectdown').removeClass('z-index')
    })

    $('.icon-warning').hover(function(){
        var x = $(this).offset().left;
        var y = $(this).offset().top;
        var name = $(this).data('name');
        switch(name){
            case 'ertong':
                $('#warnnong-tips').css({'display':'block','position':'absolute','top':y+30,'left':x-18})
                $('#warnnong-tips').find('.current-boxCont').html('<p>1.儿童默认不占床，不占票</p> <p>2.儿童入住酒店需遵循酒店入住政策</p>');
                break;
            case 'danjianc':
                $('#warnnong-tips').css({'display':'block','position':'absolute','top':y+30,'left':x-18})
                $('#warnnong-tips').find('.current-boxCont').css('width','180px').html('<p>单间差是什么？</p> <p>因旅游过程中住宿的一般是标准间，即为两个床位，如果您的出游人数（占床人数）为奇数时，需要不足另一个床位的费用。</p>');
                break;
            case '':
                $('#warnnong-tips').css({'display':'none'});
                break;
        }

    },function(){
        $('#warnnong-tips').css({'display':'none'})
    })

})

//跑马灯
function startmarquee(lh, speed, delay) {
    var p = false;
    var t;
    var o = document.getElementById("enterpriseIntroduce");
    o.innerHTML += o.innerHTML;
    o.style.marginTop = 0;
    o.onmouseover = function () { p = true; }
    o.onmouseout = function () { p = false; }
    function start() {
        t = setInterval(scrolling, speed);
        if (!p) o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
    }
    function scrolling() {
        if (parseInt(o.style.marginTop) % lh != 0) {
            o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
            if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2) o.style.marginTop = 0;
        } else {
            clearInterval(t);
            setTimeout(start, delay);
        }
    }
    setTimeout(start, delay);
}

function tipsShow(){
    $('.features-list .span-tips,.droptips').hover(function(){
        $(this).parents('.features-list li').css('z-index','1').find('.tips-con').show();
    },function(){
        $(this).parents('.features-list li').css('z-index','0').find('.tips-con').hide();
    })
}
//产品图片轮播
function ImgShuffling() {
    var imgNo = 0;
    var shufflingTime = 5000;
    var shufflingClear;
    var imgLength = $(".productInfoBox-picShow").children("img").length;
    if (imgLength > 1) {
        shufflingClear = setTimeout(ImgShowTime, shufflingTime);
    }
    function ImgShow() {
        $(".productInfoBox-picShow").children("img").hide();
        $("#imgShuffling" + imgNo).trigger("appear").show();
        $(".productInfoBox-picGetReadyPic").removeClass("productInfoBox-picGetReadyPicHover");
        $("#liShuffling" + imgNo).addClass("productInfoBox-picGetReadyPicHover").find("img[data-original]").trigger("appear");
        if ($("#liShuffling" + imgNo).attr("source") != undefined && $("#liShuffling" + imgNo).attr("source") != "") {
            $(".productInfoBoxAuthor").show();
            if ($(".productInfoBoxAuthor").html() != ("图片来源：" + $("#liShuffling" + imgNo).attr("source"))) {
                $(".productInfoBoxAuthor").html("图片来源：" + $("#liShuffling" + imgNo).attr("source"));
            }
        } else {
            $(".productInfoBoxAuthor").hide();
        }
        $(".productInfoBox-picGetReadyPic").hide();
        if (imgNo <= 4) {
            for (var i = 0; i < imgLength; i++) {
                if (i < 5) {
                    $("#liShuffling" + i).show();
                } else {
                    break;
                }
            }
        } else if (imgNo > 4 && imgNo < (imgLength - 5)) {
            $("#liShuffling" + imgNo).show();
            $("#liShuffling" + (imgNo + 1)).show();
            $("#liShuffling" + (imgNo + 2)).show();
            $("#liShuffling" + (imgNo + 3)).show();
            $("#liShuffling" + (imgNo + 4)).show();
        } else if (imgNo >= (imgLength - 5)) {
            $("#liShuffling" + (imgLength - 5)).show();
            $("#liShuffling" + (imgLength - 4)).show();
            $("#liShuffling" + (imgLength - 3)).show();
            $("#liShuffling" + (imgLength - 2)).show();
            $("#liShuffling" + (imgLength - 1)).show();
            $("#liShuffling" + (imgLength - 0)).show();
        }
    }
    function ImgShowTime() {
        imgNo++;
        if (imgNo >= imgLength) {
            imgNo = 0;
        }
        ImgShow();
        shufflingClear = setTimeout(ImgShowTime, shufflingTime);
    }
    $(".productInfoBox-picGetReady").children("ul").children("li[class^='productInfoBox-picGetReadyPic']").mouseover(function () {
        if (imgLength > 1) {
            clearInterval(shufflingClear);
        }
    }).mouseout(function () {
        if (imgLength > 1) {
            shufflingClear = setTimeout(ImgShowTime, shufflingTime);
        }
    }).click(function () {
        if (imgLength > 1) {
            imgNo = $(this).attr("id").replace("liShuffling", "");
            ImgShow();
        }
    });
    $(".productInfoBox-picGetReady-up").click(function () {
        imgNo--;
        if (imgNo < 0) {
            imgNo = imgLength - 1;
        }
        ImgShow();
    }).mouseover(function () {
        if (imgLength > 1) {
            clearInterval(shufflingClear);
        }
    }).mouseout(function () {
        if (imgLength > 1) {
            shufflingClear = setTimeout(ImgShowTime, shufflingTime);
        }
    });
    $(".productInfoBox-picGetReady-down").click(function () {
        imgNo++;
        if (imgNo >= imgLength) {
            imgNo = 0;
        }
        ImgShow();
    }).mouseover(function () {
        if (imgLength > 1) {
            clearInterval(shufflingClear);
        }
    }).mouseout(function () {
        if (imgLength > 1) {
            shufflingClear = setTimeout(ImgShowTime, shufflingTime);
        }
    });
}

//弹出层图片轮播
function popLunBo(){
    var imgnum = 0;
    var gallery = $('.hotel-gallery-box');
    var prev = $('.hotel-gallery-box .prev-btn');
    var next = $('.hotel-gallery-box .next-btn');
    var index = $('.gallery-side .current').index();
    var width = $('.slide img').width();
    var imgLength = $('.hotel-gallery-pic').length;
    var sideimg = $('.hotel-gallery-panel a')
    if(index == 0){
        prev.hide();
    }
   next.click(function(){
       imgnum++;
       if(imgnum>=imgLength){
           next.hide();
       }
       $('.gallery').animate({'left':"-"+width*imgnum+"px"});
       $('.hotel-gallery-panel a').removeClass('current').eq(imgnum).addClass('current');
       var index = $('.gallery-side .current').index();
       $('.cur-number').text(index+1);
       if(index == 0){
           prev.hide();
       }else if(index == imgLength-1){
           next.hide();
       }else{
           prev.show();
           next.show();
       }
   });
    prev.click(function(){

        imgnum--;
        $('.gallery').animate({'left':"-"+width*imgnum+"px"});
        $('.hotel-gallery-panel a').removeClass('current').eq(imgnum).addClass('current');
        var index = $('.gallery-side .current').index();
        $('.cur-number').text(index+1);
        if(index == 0){
            prev.hide();
        }else{
            prev.show();
            next.show();
        }
    })
    sideimg.click(function(){
        var index = $(this).index();
        imgnum = index;
        $('.hotel-gallery-panel a').removeClass('current').eq(index).addClass('current');
        $('.gallery').animate({'left':"-"+width*index+"px"});
        if(index == 0){
            prev.hide();
            next.show();
        }else if(index == imgLength-1){
            prev.show();
            next.hide();
        }else{
            prev.show();
            next.show();
        }
    })
}
function setWindowsScroll() {

    //快捷导航滚动
    var departbox = $('.departbox').offset().top;
    var wrapper_nav = $(".wrapper_nav").offset().top;
    var detialXC = 0;
    if ($(".cpdetail_xcjs_nav") != null && $(".cpdetail_xcjs_nav") != undefined && $(".cpdetail_xcjs_nav").length > 0) {
        detialXC = $(".cpdetail_xcjs_nav").offset().top - 50;
    }
    var hParentLength = $(".cpdetail_tit").length;
    var hMax = -1;
    var hNow = -1;
    $(window).scroll(function () {
        hParentLength = $(".cpdetail_tit").length;

        var scrolls = $(this).scrollTop();
        console.log("1:",scrolls,departbox,wrapper_nav);
        if(scrolls >=departbox && scrolls <= wrapper_nav-580){
            $(".departbox").addClass("fixed");
            $(".panel-right").addClass("sidefixed");
            $(".wrapper_nav").removeClass("wrapper_nav_top");
        }else if(wrapper_nav-530 <= scrolls && scrolls<=wrapper_nav){
            $(".panel-right").removeClass("sidefixed");
            $(".departbox").removeClass("fixed");
            console.log("2:",scrolls,departbox,wrapper_nav);
        }else if(scrolls >= wrapper_nav) {
            $(".panel-right").removeClass("sidefixed");
            $(".departbox").removeClass("fixed");
            if (!$(".wrapper_nav").hasClass("wrapper_nav_top")) {
                $(".cpdetail_khdp").attr("style", "margin-botton:1px;");//解决部分浏览器用户点评和旅游咨询挨着的问题
                $(".wrapper_nav").addClass("wrapper_nav_top");
                if ($("#hidFirstDepartDate").val() != undefined && $("#hidFirstDepartDate").val() != "1900年01月01日" && $("#hidProductStatus").val() != undefined && $("#hidProductStatus").val() == "30") {
                    $(".wrapper_nav_ydBtn").show();
                }
            }
            if (hParentLength > 0) {
                //循环
                for (var i = 0; i < hParentLength; i++) {
                    if (i + 1 < hParentLength) {
                        if ((scrolls + 70) > $(".cpdetail_tit").eq(i).offset().top && (scrolls + 60) < ($(".cpdetail_tit").eq(i + 1).offset().top)) {
                            hMax = i;
                        }
                    } else if ((scrolls + 70) >= $(".cpdetail_tit").eq(i).offset().top) {
                        hMax = i;
                    }
                }
                //结束
                if (hMax > -1 && hMax != hNow) {
                    hNow = hMax;
                    var hID = $(".cpdetail_tit").eq(hMax).attr("id");
                    $("a[href='#" + hID + "']").parent("li").parent("ul").children("li").removeClass("now");
                    $("a[href='#" + hID + "']").parent("li").addClass("now");
                    $("a[href='#" + hID + "']").parent("li").parent("ul").children("li").children("a").removeClass("ahover");
                    $("a[href='#" + hID + "']").addClass("ahover");
                }
            }

        } else {
            if ($(".wrapper_nav").hasClass("wrapper_nav_top")) {
                $(".wrapper_nav").removeClass("wrapper_nav_top");
                $(".wrapper_nav_list li a").removeClass("ahover").parent("li").removeClass("now");
                $(".wrapper_nav_ydBtn").hide();
            }
            $(".departbox").removeClass("fixed");
            $(".panel-right").removeClass("sidefixed");
        }
        //行程滚动
        if (scrolls >= detialXC && detialXC != 0) {
            if (scrolls > $('.cpdetail_tit_xcjs').offset().top && scrolls < ($('.cpdetail_tit_xcjs').parent(".content-box").height() + $('.cpdetail_tit_xcjs').parent(".content-box").offset().top - $(".cpdetail_xcjs_nav").height())) {
                if (window.XMLHttpRequest) {
                    $(".cpdetail_xcjs_nav").css({
                        position: "fixed",
                        top: "60px",
                        _top: "110px"
                    });
                    for (var i = 0; i < $(".cpdetail_con_dayBox").length; i++) {
                        if (scrolls > ($(".cpdetail_con_dayBox").eq(i).offset().top - 150) && scrolls < ($(".cpdetail_con_dayBox").eq(i).offset().top + $(".cpdetail_con_dayBox").eq(i).height())) {
                            $(".cpdetail_xcjs_nav").children("a").eq(i).addClass("now").siblings("a").removeClass("now");
                        }
                    }
                } else {
                    $(".cpdetail_xcjs_nav").css({
                        top: scrolls + 100
                    });
                    //循环
                    for (var i = 0; i < $(".cpdetail_con_dayBox").length; i++) {
                        if (scrolls > ($(".cpdetail_con_dayBox").eq(i).offset().top - 150) && scrolls < ($(".cpdetail_con_dayBox").eq(i).offset().top + $(".cpdetail_con_dayBox").eq(i).height())) {
                            $(".cpdetail_xcjs_nav").children("a").eq(i).addClass("now").siblings("a").removeClass("now");
                        }
                    }
                    //结束
                }
            } else {
                if ($('.wrapper_nav').hasClass("wrapper_nav_top")) {
                    $(".cpdetail_xcjs_nav").css({
                        position: "absolute",
                        top: detialXC
                    });
                } else {
                    $(".cpdetail_xcjs_nav").css({
                        position: "absolute",
                        top: detialXC + 50
                    });
                }
                $(".cpdetail_xcjs_nav").children("a").eq(0).addClass("now").siblings("a").removeClass("now");
            }
        } else {
            if ($('.wrapper_nav').hasClass("wrapper_nav_top")) {
                $(".cpdetail_xcjs_nav").css({
                    position: "absolute",
                    top: detialXC
                });
            } else {
                $(".cpdetail_xcjs_nav").css({
                    position: "absolute",
                    top: detialXC + 50
                });
            }
            $(".cpdetail_xcjs_nav").children("a").eq(0).addClass("now").siblings("a").removeClass("now");
        }
    });
    //锚点滑动
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset - 60
                    },
                    1000);
                return false;
            }
        }
    });
}

$.fn.smartFloat = function () {
    var position = function (element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function () {
            var scrolls = $(this).scrollTop();
            if (scrolls > 300) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: "0",
                        _top: "0"


                    });
                } else {
                    element.css({
                        top: scrolls
                    });
                }
            } else {
                element.css({
                    position: "absolute",
                    top: '0'
                });
            }
        });
    };
    return $(this).each(function () {
        position($(this));
    });
};