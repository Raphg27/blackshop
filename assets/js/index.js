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



function submit() {
  var type = document.getElementById('select-type');
  var size = document.getElementById('select-size');
  var checkout = document.getElementById("check-out-button");

  if(type.value == 'matte' && size.value == "air-11-inches"){
    checkout.href = "http://blvckshop.com/cart/6092926812192:1";
  } else if(type.value == 'matte' && size.value == "air-13-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926746656:1";
  } else if(type.value == 'matte' && size.value == "12-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926681120:1";
  } else if(type.value == 'matte' && size.value == "pro-13-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926550048:1";
  } else if(type.value == 'matte' && size.value == "pro-15-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926615584:1";
  } else if(type.value == 'matte' && size.value == "pro-touch-13-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926418976:1";
  } else if(type.value == 'matte' && size.value == "pro-touch-15-inches") {
    checkout.href = "http://blvckshop.com/cart/6092893126688:1";
  } else if(type.value == 'jet' && size.value == "air-11-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926779424:1";
  } else if(type.value == 'jet' && size.value == "air-13-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926779424:1";
  } else if(type.value == 'jet' && size.value == "12-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926713888:1";
  } else if(type.value == 'jet' && size.value == "pro-13-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926582816:1";
  } else if(type.value == 'jet' && size.value == "pro-15-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926648352:1";
  } else if(type.value == 'jet' && size.value == "pro-touch-13-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926451744:1";
  } else if(type.value == 'jet' && size.value == "pro-touch-15-inches") {
    checkout.href = "http://blvckshop.com/cart/6092926386208:1";
  }
};
