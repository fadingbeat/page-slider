$(document).ready( () => {
    let show = 8;
    //calculate each slides width depending on how many you want to show
    let w = $('.wrapper').width() / show;
    
    () => {
        $(".btn_left").click( () => {
            $('.item:first-child').animate({
                marginLeft: -w,
                opacity: '0.4'
            }, 'slow', () => {
                $(this).appendTo($(this).parent()).css({marginLeft: 0, opacity: 1});
            });
        });

        $(".btn_right").click( () => {
            $('.item:first-child').animate({
                marginRight: -w,
                opacity: '0.4'
            }, 'slow', () => {
                $(this).appendTo($(this).parent()).css({marginRight: 0, opacity: 1});
            });
        });
    }
    const timer;
    timer = setInterval(slider, 1000);
});