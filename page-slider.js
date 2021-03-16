// var first = $('.item').eq(0);
// var count = $('.item').length;
// var last = $('.item').eq(count - 1);
// first.addClass('active');
var w = $('.slider').length;


$('.btn_right').click(function() {
  var li = $('li.item.col.active');
  var slide = function() {
    target = $('.active').index();
    nextSlide(target);
  }
    
  var nextSlide = function(target) {
    element_clone = $('.item').eq(target).clone();
    $('.item').eq(target).remove();
    $('.slider').append(element_clone);
  };
    
  slide();

  if (li.length)
    li.removeClass("active").next().addClass("active");
  else
    jQuery("li").first().addClass("active");
});

$('.btn_left').click(function() {
  var li = $('li.item.col.active');
  var slide = function() {
    target = $('.active').index();
    nextSlide(target);

    if (li.length)
      li.removeClass("active").prev().addClass("active");
    else
      jQuery("li").last().addClass("active");
  }
    
  var nextSlide = function(target) {
    element_clone = $('.item').eq(target).clone();
    $('.item').eq(target).remove();
    $('.slider').append(element_clone);
  };
    
  slide();

  
});
