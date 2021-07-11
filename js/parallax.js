$(document).ready(function () {
  $(window).scroll(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 800) {
      var scroll = $(window).scrollTop();
      $("header .texts__main").css({
        transform: "translate(0px , " + scroll / 2 + "%)",
      });
      $(".main .about__text").css({
        transform: "translate(0px, -" + scroll / 4 + "%)",
      });
    }
  });
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 800) {
      $(".main .about__text").css({
        transform: "translate(0px, 0px)",
      });
    }
  });
});
