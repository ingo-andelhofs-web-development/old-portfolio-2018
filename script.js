/*=================================================
Javascript by Ingo A.
=================================================*/


// Smooth scroll + active class on <a>-tag
// _______________________________________
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      // a
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 700, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  // nav a
  $('nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          // nav ul li a
          $('nav ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


// change navbar when scrolling 
// ____________________________
$(document).ready(function(){
  if ($(document).scrollTop() > window.innerHeight) {
    $("#nav").css("background-color", "rgba(41, 43, 44, 0.98)");
  };
  $(window).scroll(function() {
    if ($(document).scrollTop() < window.innerHeight) { 
      $("#nav").css("background-color", "rgba(41, 43, 44, 0.05)"); 
    } else {
      $("#nav").css("background-color", "rgba(41, 43, 44, 0.98)");
    }
  });
});


// change navigation menu to mobile
// ________________________________
    $( window ).on("load resize" ,function() { 
        if ($(window).width() > 800) { 
            $('nav .navItems').css('display', 'inline-block');
        } else{ 
            $('nav .navItems').css('display', 'none');

            $('nav .navHam').on("click", function() { 
                $('nav .navItems').slideToggle(); 
                $('nav .navItems').toggleClass("open");

                // change nav color (spash screen)
                if ($(document).scrollTop() < window.innerHeight) {
                    if ($('nav .navItems').hasClass("open")) {
                        $("#nav").css("background-color", "rgba(41, 43, 44, 0.98)");
                    }else {
                        $("#nav").css("background-color", "rgba(41, 43, 44, 0.05)");
                    };
                }else {
                    $("#nav").css("background-color", "rgba(41, 43, 44, 0.98)");
                };
            });

            // close nav on click
            $("nav li, nav .title a").on("click", function() {
                    $('nav .navItems').slideToggle();
                    $('nav .navItems').toggleClass("open");
            });
        }
    });
