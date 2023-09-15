//Navbar Scrolldown BG-color Changes
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//================================================================================LAPTOP VIEW=================
//banner content
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
  if (window.innerWidth > 991) {
    $("#venom").waypoint(
      function () {
        $("#venom").css("visibility", "visible");
        $("#venom").addClass("animate__animated animate__fadeInBottomLeft");
      },
      { offset: "85%" }
    );
  }
});
$(document).ready(function () {
  if (window.innerWidth <=991) {
    $("#tab").waypoint(
      function () {
        $("#tab").css("visibility", "visible");
        $("#tab").addClass("animate__animated animate__zoomIn");
      },
      { offset: "85%" }
    );
  }
});
//layout-3 CONTENTS
$(document).ready(function () {
  $("#v-row-1").waypoint(
    function () {
      $("#v-row-1").css("visibility", "visible");
      $("#v-row-1").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});
$(document).ready(function () {
  $("#v-row-2").waypoint(
    function () {
      $("#v-row-2").css("visibility", "visible");
      $("#v-row-2").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});
$(document).ready(function () {
  $("#v-row-3").waypoint(
    function () {
      $("#v-row-3").css("visibility", "visible");
      $("#v-row-3").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});
$(document).ready(function () {
  $("#v-row-4").waypoint(
    function () {
      $("#v-row-4").css("visibility", "visible");
      $("#v-row-4").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
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
    $("#sh-1,#sh-2,#sh-3,#sh-4,#sh-5,#sh-6").mouseenter(function () {
      $(this).animate(
        {
          "margin-top": "-.8em",
          easing: "easeIn",
        },
        400
      );
    });
    $("#sh-1,#sh-2,#sh-3,#sh-4,#sh-5,#sh-6").mouseleave(function () {
      $(this).animate({ "margin-top": "0em" }, 400);
    });
  }
});

//layout-4 CARDS
$(document).ready(function () {
  $("#sh-1").waypoint(
    function () {
      $("#sh-1").css("visibility", "visible");
      $("#sh-1").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});

$(document).ready(function () {
  $("#sh-2").waypoint(
    function () {
      $("#sh-2").css("visibility", "visible");
      $("#sh-2").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});

$(document).ready(function () {
  $("#sh-3").waypoint(
    function () {
      $("#sh-3").css("visibility", "visible");
      $("#sh-3").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});
$(document).ready(function () {
  $("#sh-4").waypoint(
    function () {
      $("#sh-4").css("visibility", "visible");
      $("#sh-4").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});
$(document).ready(function () {
  $("#sh-5").waypoint(
    function () {
      $("#sh-5").css("visibility", "visible");
      $("#sh-5").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});
$(document).ready(function () {
  $("#sh-6").waypoint(
    function () {
      $("#sh-6").css("visibility", "visible");
      $("#sh-6").addClass("animate__animated animate__zoomIn");
    },
    { offset: "85%" }
  );
});

//BACK TO TOP
$(document).ready(function () {
  var i = 0;
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled >= 200) {
      if (i == 0) {
        $(".totop").css("visibility", "visible").fadeIn("slow");
        $("#fire").css({ visibility: "hidden" });

        i = 1;
      }
    } else {
      if (i == 1) {
        $(".totop").fadeOut("fast");
        $("#fire").css({ visibility: "visible" });
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
    $("html, body").animate({ scrollTop: "0" }, 600);
  });
});

// CARDS CHARACTERS
$(document).ready(function () {
  if (window.innerWidth >991) {
    $("#card-char-1, #card-char-2, #card-char-3,#card-char-4").mouseenter(
      function () {
        $(this).find(".card-img-overlay").fadeIn(0.01).animate({
          "margin-top": "8.8em",
          easing: "easeIn",
          queue: false,
        });
        $(this).find(".card-img-overlay").css("visibility", "visible");
      }
    );

    $("#card-char-1, #card-char-2, #card-char-3, #card-char-4").mouseleave(
      function () {
        $(this)
          .find(".card-img-overlay")
          .animate({
            "margin-top": "8.2em",
            easing: "easeIn",
            queue: false,
          })
          .fadeOut("fast");
      }
    );
  }
});
//card-1
$(document).ready(function () {
  $("#card-char-1").waypoint(
    function () {
      $("#card-char-1").addClass("animate__animated animate__fadeInUp");
      $("#card-char-1").css("visibility", "visible");
    },
    { offset: "85%" }
  );
});
//card-2
$(document).ready(function () {
  $("#card-char-2").waypoint(
    function () {
      $("#card-char-2").addClass("animate__animated animate__fadeInUp");
      $("#card-char-2").css("visibility", "visible");
    },
    { offset: "85%" }
  );
});
//card-3
$(document).ready(function () {
  $("#card-char-3").waypoint(
    function () {
      $("#card-char-3").addClass("animate__animated animate__fadeInUp");
      $("#card-char-3").css("visibility", "visible");
    },
    { offset: "85%" }
  );
});
//card-4
$(document).ready(function () {
  $("#card-char-4").waypoint(
    function () {
      $("#card-char-4").addClass("animate__animated animate__fadeInUp");
      $("#card-char-4").css("visibility", "visible");
    },
    { offset: "85%" }
  );
});
//===================================================================small device========================
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
// CARDS CHARACTERS
$(document).ready(function () {
  if (window.innerWidth <= 991) {
    $("#card-char-1, #card-char-2, #card-char-3,#card-char-4").mouseenter(
      function () {
        $(this).find(".card-img-overlay").fadeIn(0.01).animate({
          "margin-top": "8.8em",
          easing: "easeIn",
          queue: false,
        });
        $(this).find(".card-img-overlay").css("visibility", "visible");
      }
    );

    $("#card-char-1, #card-char-2, #card-char-3, #card-char-4").mouseleave(
      function () {
        $(this)
          .find(".card-img-overlay")
          .animate({
            "margin-top": "8.2em",
            easing: "easeIn",
            queue: false,
          })
          .fadeOut("fast");
      }
    );
  }
});

$(document).ready(function () {
  if (window.innerWidth <= 870) {
    $("#card-char-1, #card-char-2, #card-char-3,#card-char-4").mouseenter(
      function () {
        $(this).find(".card-img-overlay").fadeIn(0.01).animate({
          "margin-top": "7.8em",
          easing: "easeIn",
          queue: false,
        });
        $(this).find(".card-img-overlay").css("visibility", "visible");
      }
    );

    $("#card-char-1, #card-char-2, #card-char-3, #card-char-4").mouseleave(
      function () {
        $(this)
          .find(".card-img-overlay")
          .animate({
            "margin-top": "7.2em",
            easing: "easeIn",
            queue: false,
          })
          .fadeOut("fast");
      }
    );
  }
});

$(document).ready(function () {
  if (window.innerWidth <= 575) {
    $("#card-char-1, #card-char-2, #card-char-3,#card-char-4").click(
      function () {
        $(this).find(".card-img-overlay").fadeIn(0.01).animate({
          "margin-top": "15.8em",
          easing: "easeIn",
          queue: false,
        });
        $(this).find(".card-img-overlay").css("visibility", "visible");
      }
    );

    $("#card-char-1, #card-char-2, #card-char-3, #card-char-4").mouseleave(
      function () {
        $(this)
          .find(".card-img-overlay")
          .animate({
            "margin-top": "15.2em",
            easing: "easeIn",
            queue: false,
          })
          .fadeOut("fast");
      }
    );
  }
});