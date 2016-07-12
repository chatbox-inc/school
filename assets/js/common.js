$(function(){
    $('#gmap').on('click',function(){
        $('#gmap iframe').css("pointer-events", "auto");
    });
});

//btn-entryの調整
$(function(){
    $('.btn-entry').click(function() {
        console.log("てすてす");
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var headerHeight = 35;
        var position = target.offset().top - headerHeight;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});