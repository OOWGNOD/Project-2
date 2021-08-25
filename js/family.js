$(document).ready(function(){
    textchange = false;
    $('.selectFamily').click(function(){
      if(textchange){
        textchange = false;
        $('.selectInner').css({
        "height":"410",
        "transition":".3s"
    });
      }else{
        textchange = true;
        $('.selectInner').css({
            "height":"0",
            "transition":".3s",
        });
      }
    })
  });