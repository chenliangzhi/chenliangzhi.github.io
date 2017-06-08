/**
 * Created by Administrator on 2017/3/27.
 */
(function () {
    var flag = true;
    $('.logo-btn').click(function () {
        if(flag){
            flag = false;
            $('.subnav').stop().animate({
                left: -50 +'px'
            },300);
            $('.right-box').stop().animate({
                left:0 +'px'
            },300);
            $(this).find('i').addClass('active');
        }else {
            flag = true;
            $('.subnav').stop().animate({
                left: 0 +'px'
            },300);
            $('.right-box').stop().animate({
                left:50 +'px'
            },300);
            $(this).find('i').removeClass('active');
        }
    });

    $('.ul li').hover(function () {
        $(this).find('.hide').show();
    },function () {
        $(this).find('.hide').hide();
    });

})();