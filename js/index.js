$(document).ready(function () {
  $(".nav__main a").each(function (index, element) {
    $(this).css({
      top: "-200px",
    });
    $(this).animate(
      {
        top: "0",
      },
      1000 + index * 500
    );
  });
  if ($(window).width() > 800) {
    $("header .texts__main").css({
      opacity: 0,
      marginTop: 0,
    });
    $("header .texts__main").animate(
      {
        opacity: 1,
        marginTop: -52,
      },
      2000
    );
  }
  var about = $("#about").offset().top,
    menu = $("#menu").offset().top,
    gallery = $("#gallery").offset().top,
    contact = $("#location").offset().top;
  $("#btn-about").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: about - 100,
      },
      500
    );
  });
  $("#btn-menu").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: menu,
      },
      500
    );
  });
  $("#btn-gallery").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: gallery,
      },
      500
    );
  });
  $("#btn-contact").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: contact,
      },
      500
    );
  });
});
