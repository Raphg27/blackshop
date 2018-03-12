$(document).ready(function(){
  AOS.init({
    once: true,
  });
  $('.my-paroller').paroller();
  $("#matte").click(function () {
    $("#select-type").val("matte");
  });
  $("#jet").click(function () {
    $("#select-type").val("jet");
  });
  $("#down-button").click(function() {
    $('html, body').animate({
      scrollTop: $(".first-section").offset().top
    }, 750);
  });
});



$(function() {
  $("li").click(function() {
    // remove classes from all
    $("li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
  });
});
