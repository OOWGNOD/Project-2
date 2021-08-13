$(function() { 

    // 보이기 | 숨기기 
    $(window).scroll(function() { if ($(this).scrollTop() > 250) {
         $('#normalBanner').css({
         "position":"fixed",
         "top":"-20px",
         "left":"1334px",
         "width":"333.75px",
         "bottom":"auto"});
         } else{
                $('#normalBanner').css({
                    "position":"absolute",
                    "top":"40px",
                    "left":"0px",
                    "width":"333.75px",
                    "bottom":"auto"});
                };
                return false;
            });
        });
