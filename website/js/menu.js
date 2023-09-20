var navbar = $('.navbar');
var selector = $('.navbar').find('a').length;
//var selector = $(".navbar").find(".selector");
var activeItem = navbar.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".navbar").on("click","a",function(e){
  $('.navbar a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
  var targetSection = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(targetSection).offset().top
  }, 300); // Adjust the duration as needed
});

