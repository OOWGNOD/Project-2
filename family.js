$('.selectFamily').on('click',function() {
    if (scroll > 2000) {
        //console.log('a');
        $(".mainside_Banner").css("display","block");
    } else {
        //console.log('a');
        $(".mainside_Banner").css("display","inherit");
    }
});