/*global $,alert, console */
$(function(){
    "use strict";
    //adjust header height
    var myheader = $('.header'),
        myslider = $('.bxslider');
    myheader.height($(window).height());
    $(window).resize(function(){
       myheader.height($(window).height());
       myslider.each(function(){
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) /2);
    });
    });
    //links add active class
    $('.links li ').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

    });
    myslider.bxSlider({
        pager: false
    });
    myslider.each(function(){
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) /2);
    });
    
}); 
