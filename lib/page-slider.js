"use strict";

var nextSlide = function nextSlide(target) {
  element_clone = $('.item').eq(target).clone();
  $('.item').eq(target).remove();
  $('.slider').append(element_clone);
};

$('.btn_right').click(function () {
  var li = $('li.item.col.active');

  var slide = function slide() {
    target = $('.active').index();
    nextSlide(target);
    if (li.length) li.removeClass("active").next().addClass("active");else $("li").first().addClass("active");
  };

  slide();
});
$('.btn_left').click(function () {
  var li = $('li.item.col.active');

  var slide = function slide() {
    target = $('.active').index();
    nextSlide(target);
    if (li.length) li.removeClass("active").prev().addClass("active");else $("li").last().addClass("active");
  };

  slide();
});