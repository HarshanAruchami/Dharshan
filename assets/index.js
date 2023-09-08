//Navbar Scrolldown BG-color Changes
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//LAPTOP VIEW
//baner content
$(document).ready(function () {
  if (window.innerWidth > 991) {
    $("#f-col").waypoint(
      function () {
        $("#home-bg-video").addClass("animate__animated animate__zoomIn");
        $("#f-col,#right,#register,.navbar-toggler ").addClass(
          "animate__animated animate__fadeInRight"
        );
        $("#s-col,.navbar-brand").addClass(
          "animate__animated animate__fadeInLeft"
        );
        $("#top").addClass("animate__animated animate__fadeInUp");
      },
      { offset: "50%" }
    );
  }
});

//cards
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $(".card-border1").waypoint(
      function () {
        $("#top,#right,#register,.navbar-toggler,#f-col ").addClass(
          "animate__animated animate__fadeInRight"
        );
        $(".navbar-brand,#s-col").addClass(
          "animate__animated animate__fadeInLeft"
        );
        $(".card-border1,.card-border2,.card-border3,.card-border4").addClass(
          "animate__animated animate__fadeInUp"
        );
      },
      { offset: "100%" }
    );
  }
});

//MOBILE VIEW
$(document).ready(function () {
  if (window.innerWidth <= 768) {
    $(".navbar-toggler").waypoint(
      function () {
        $("#top,#right,#register,.navbar-toggler,#f-col ").addClass(
          "animate__animated animate__fadeInRight"
        );
        $(".navbar-brand,#s-col").addClass(
          "animate__animated animate__fadeInLeft"
        );
        $(".card-border1,.card-border2,.card-border3,.card-border4").addClass(
          "animate__animated animate__fadeInUp"
        );
      },
      { offset: "10%" }
    );
  }
});

$(document).ready(function () {
  if (window.innerWidth <= 575) {
    $(".navbar-toggler").waypoint(
      function () {
        $(".navbar-brand,#f-col").addClass(
          "animate__animated animate__fadeInUp"
        );
      },
      { offset: "10%" }
    );
  }
});
