let show = 9;
let w = $('.slider').width() / show;
var first = $('.item').eq(0);
var count = $('.item').length;
var last = $('.item').eq(count - 1);
first.addClass('active');

$('.btn_right').click(function() {
  var slide = function() {
    target = $('.active').index();
    nextSlide(target);
  }

  var nextSlide = function(target) {
    $('.item').removeClass('active').eq(target+1).addClass('active');
    element_clone = $('.item').eq(target).clone();
    $('.item').eq(target).remove();
    $('.slider').append(element_clone);
  };

  slide();

});
