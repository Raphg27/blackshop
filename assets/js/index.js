$(document).ready(function(){
  AOS.init({
    once: true,
  });
  $('.my-paroller').paroller();
});

$("#down-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".second-section").offset().top
    }, 750);
});
