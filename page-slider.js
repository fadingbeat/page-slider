$(document).ready(function () {
    var show = 8;
    //calculate each slides width depending on how many you want to show
    var w = $('.wrapper').width() / show;
    
    function slider() {
        $(".left_arrows img:first-child").click(function() {
            $('.item:first-child').animate({
                marginLeft: -w,
                opacity: '0.4'
            }, 'slow', function () {
                $(this).appendTo($(this).parent()).css({marginLeft: 0, opacity: 1});
            });
        });

        $(".right_arrows img:first-child").click(function() {
            $('.item:first-child').animate({
                marginRight: -w,
                opacity: '0.4'
            }, 'slow', function () {
                $(this).appendTo($(this).parent()).css({marginRight: 0, opacity: 1});
            });
        });
    }
    var timer;
    timer = setInterval(slider, 1000);
});