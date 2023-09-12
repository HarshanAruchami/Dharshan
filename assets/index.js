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
      },
      { offset: "100%" }
    );
  }
});
//layout-2 CARDS
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $(".cards").waypoint(
      function () {
        $(".cards").css("visibility", "visible");
        $(".card-border2,.card-border3").addClass(
          "animate__animated animate__fadeInUp"
        );
        $(".card-border1").addClass(
          "animate__animated animate__fadeInBottomLeft"
        );
        $(".card-border4").addClass(
          "animate__animated animate__fadeInBottomRight"
        );
      },
      { offset: "85%" }
    );
  }
});
//layout-3 VENOM
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#venom").waypoint(
      function () {
        $("#venom").css("visibility", "visible");
        $("#venom").addClass("animate__animated animate__fadeInBottomLeft");
      },
      { offset: "85%" }
    );
  }
});
//layout-3 CONTENTS
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#v-row-1").waypoint(
      function () {
        $("#v-row-1").css("visibility", "visible");
        $("#v-row-1").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#v-row-2").waypoint(
      function () {
        $("#v-row-2").css("visibility", "visible");
        $("#v-row-2").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#v-row-3").waypoint(
      function () {
        $("#v-row-3").css("visibility", "visible");
        $("#v-row-3").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#v-row-4").waypoint(
      function () {
        $("#v-row-4").css("visibility", "visible");
        $("#v-row-4").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});

//H3 hover effect
$(document).ready(function () {
  $(".hover-cards .card h3,#flight").mouseenter(function () {
    $(this).addClass("dummy");
  });
  $(".hover-cards .card h3,#flight").mouseleave(function () {
    $(this).removeClass("dummy");
  });
});

//HOVER EFFECT SHADOW FOR CARDS
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-1").mouseenter(function () {
      $(this).animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-1").mouseleave(function () {
      $("#sh-1").animate({ "margin-top": "0em" }, 400);
    });
  }
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-2").mouseenter(function () {
      $("#sh-2").animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-2").mouseleave(function () {
      $("#sh-2").animate({ "margin-top": "0em" }, 400);
    });
  }
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-3").mouseenter(function () {
      $("#sh-3").animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-3").mouseleave(function () {
      $("#sh-3").animate({ "margin-top": "0em" }, 400);
    });
  }
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-4").mouseenter(function () {
      $("#sh-4").animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-4").mouseleave(function () {
      $("#sh-4").animate({ "margin-top": "0em" }, 400);
    });
  }
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-5").mouseenter(function () {
      $("#sh-5").animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-5").mouseleave(function () {
      $("#sh-5").animate({ "margin-top": "0em" }, 400);
    });
  }
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-6").mouseenter(function () {
      $("#sh-6").animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-6").mouseleave(function () {
      $("#sh-6").animate({ "margin-top": "0em" }, 400);
    });
  }
});

//layout-4 CARDS
$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-1,#sh-2,#sh-3").waypoint(
      function () {
        $("#sh-1,#sh-2,#sh-3").css("visibility", "visible");
        $("#sh-1,#sh-2,#sh-3").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $("#sh-4,#sh-5,#sh-6").waypoint(
      function () {
        $("#sh-4,#sh-5,#sh-6").css("visibility", "visible");
        $("#sh-4,#sh-5,#sh-6").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});

//BACK TO TOP
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scrolled = $(window).scrollTop();
//     if (scrolled > 200) $(".totop").css("visibility", "visible").fadeIn("slow");
//     if (scrolled < 200) $(".totop").fadeOut("slow");
//   });
//   //Click event
//   $("#flight").click(function () {
//     $("#fire").css("visibility", "visible");
//     $("html, body").animate({ scrollTop: "0" }, 100);
//   });
// });
$(document).ready(function () {
  var i = 0;
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled >= 200) {
      if (i == 0) {
        $(".totop").css("visibility", "visible").fadeIn("slow");
        $("#fire").css({"visibility": "hidden"});

        i = 1;
      }
    } else {
      if (i == 1) {
        $(".totop").fadeOut("fast");
        $("#fire").css({"visibility": "visible"});
        i = 0;
      }
    }
  });
  //Hover event
  // $("#flight").mouseenter(function () {
  //   $("#flight").addClass("animate__animated animate__shakeY");
  // });
  // $("#flight").mouseleave(function () {
  //   $("#flight").removeClass("animate__animated animate__shakeY");
  // });
  //Click event
  $("#flight").click(function () {
    $("#fire").css("visibility", "visible");
    $("html, body").animate({ scrollTop: "0" }, 0);
  });
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
        $(".cards").css("visibility", "visible");

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
