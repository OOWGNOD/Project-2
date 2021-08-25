$(function() { 

    // 보이기 | 숨기기 
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

         if ( scroll > 250 & scroll <= 1500 ) {
         $('#normalBanner').css({
         "position":"fixed",
         "top":"-20px",
         "left":"1334px",
         "width":"333.75px",
         "bottom":"auto"});
         }else if (scroll > 1500) {
            $('#normalBanner').css({
                "position":"absolute",
                "top":"1400px",
                "left":"0px",
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
                // return false;
            });
        });

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
            if (scroll > 1500) {
                //console.log('a');
                $(".mainside_Banner").css("display","block");
            } else {
                //console.log('a');
                $(".mainside_Banner").css("display","inherit");
            }
        });