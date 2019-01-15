$(document).ready(function() {
  // OWL CAROUSEL INSTALLATION
  $("#testimonial-carousel").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1],
    itemsMobile: [479, 1],
    pagination: true
  });
  $("#home-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1],
    itemsMobile: [479, 1],
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
    ],
    transitionStyle: "fadeUp"
  });

  /* Navigation Menu*/
  var offsettop = $(".navbar").offset().top;
  if (offsettop > 50) {
    $(".navbar").addClass("colored-nav");
    $(".navbar").addClass("gradient-blue-pink");
    $("#scroll-top-div").fadeIn("350");
  } else {
    $(".navbar").removeClass("colored-nav");
    $(".navbar").removeClass("gradient-blue-pink");
    $("#scroll-top-div").fadeOut("500");
  }
  var num = 50; //number of pixels before modifying styles

  $(window).bind("scroll", function() {
    if ($(window).scrollTop() > num) {
      $(".navbar").addClass("colored-nav");
      $(".navbar").addClass("gradient-blue-pink");
      $("#scroll-top-div").fadeIn("500");
    } else {
      $(".navbar").removeClass("colored-nav");
      $(".navbar").removeClass("gradient-blue-pink");
      $("#scroll-top-div").fadeOut("500");
    }
  });

  /* SMOOTH SCROLLING SCRIPT*/
  // Add smooth scrolling to all links
  $(".navbar-nav li a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  /****************************BACK TO TOP************************************/
  $("#scroll-top-div").on("click", function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      700
    );
  });

  /*********************Giphy Background***********************/
  var xhr = $.get(
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=perfect-loop"
  );

  xhr.done(function(data) {
    $(".giphy-bg").css(
      "background-image",
      "url(https://media.giphy.com/media/" + data.data.id + "/giphy.gif)"
    );

    $(".giphy-parallax").css(
      "background-image",
      "url(https://media.giphy.com/media/" + data.data.id + "/giphy.gif)"
    );
  });

  /*********************YT Video.JS***********************/
  function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player("YouTubeBackgroundVideoPlayer", {
      videoId: "{$loadYouTubeVideoID}", // YouTube Video ID
      width: 1280, // Player width (in px)
      height: 720, // Player height (in px)
      playerVars: {
        playlist: "{$loadYouTubeVideoID}",
        autoplay: 1, // Auto-play the video on load
        autohide: 1,
        disablekb: 1,
        controls: 0, // Hide pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        loop: 1, // Run the video in a loop
        fs: 0, // Hide the full screen button
        autohide: 0, // Hide video controls when playing
        rel: 0,
        enablejsapi: 1
      },
      events: {
        onReady: function(e) {
          e.target.mute();
          e.target.setPlaybackQuality("hd1080");
        },
        onStateChange: function(e) {
          if (e && e.data === 1) {
            var videoHolder = document.getElementById("home-banner-box");
            if (videoHolder && videoHolder.id) {
              videoHolder.classList.remove("loading");
            }
          } else if (e && e.data === 0) {
            e.target.playVideo();
          }
        }
      }
    });
  }
});
