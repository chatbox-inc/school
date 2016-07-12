$(function(){
    $('#gmap').on('click',function(){
        $('#gmap iframe').css("pointer-events", "auto");
    });
});

//btn-entryの調整
$(function(){
    $('.btn-entry').click(function() {
        var speed = 400;
        var target = $("#entryBlock");
        var headerHeight = 35;
        var position = target.offset().top - headerHeight;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});