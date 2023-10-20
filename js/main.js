$(function(){

    /* mobile nav */

    $('.menu_open').click(function(){
        $('.mobile_gnb').slideDown();
    });//menu open
    $('.menu_close').click(function(){
        $('.mobile_gnb').slideUp();
    });//menu close

    $('.depth01 > a').click(function(){
        if($(this).siblings().css('display') == 'none') {
            $('.depth02').slideUp();
            $(this).siblings().slideDown();
            $('.depth01 > a').css({
                'color' : '#333',
            });
            $(this).css({
                'color' : '#BB181D',
            });
        
        } else {
            $(this).siblings().slideUp();
            $(this).css({
                'color' : '#333',
            });
        }
    });//.depth01 click

});//jquery end