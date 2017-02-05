$(function() { 
  var topBtn = $('#topBtn');
  
  topBtn.hide();
  
  $(window).scroll(function(){
    if( $(this).scrollTop()>100){
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  
  topBtn.on('click',function(){
    $('html,body').stop().animate({scrollTop:0}, 500);
    return false;
  });
});


$(function() { 
   $("li:nth-child(2) a").click(function () {
        var height = $('#about').offset().top;
        $('html,body').animate({ scrollTop: height }, {
         'duration': 300,
         'easing': 'swing'
        });
        return false;
    });
});


$(function() { 
   $("li:nth-child(5) a").click(function () {
        var height = $('#accInfo').offset().top;
        $('html,body').animate({ scrollTop: height }, {
         'duration': 300,
         'easing': 'swing'
        });
        return false;
    });
});


$(window).on('load', function() {
    var url = $(location).attr('href');
    if(url.indexOf("?id=") !== -1){
        var id = url.split("?id=");
        var $target = $('#' + id[id.length - 1]);
        if($target.length){
            var pos = $target.offset().top;
            $("html, body").animate({scrollTop:pos}, {
             'duration': 300,
             'easing': 'swing'
           });
        }
    }
});