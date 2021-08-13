$(function() { 
    // 보이기 | 숨기기 
    $(window).scroll(function() { if ($(this).scrollTop() > 500) 
        { 
            //250 넘으면 버튼이 보여짐니다. 
            $('.btTop').fadeIn(); $('.btTop').css('left'); 
            // #sidebar left:0 죄표
         } else { $('.btTop').fadeOut(); } }); 
         // 버튼 클릭시 
         $(".btTop").click(function() { $('html, body').animate({ scrollTop : 0 
            // 0 까지 animation 이동합니다. 
        }, 1200); 
        // 속도 400
         return false; }); });