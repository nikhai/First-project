

/*When you click the hamburger, it changes shape and opens/hides the menu. */
$("#nav-button").on("click", function(){
$(this).toggleClass("active inactive").delay(500);
$("nav").toggleClass("active inactive").delay(500);
});

$("#first-pop-up-button").on("click", function(){
$("#first-pop-up").css( "display", "block" );
});

$(".pop-up a").on("click", function(){
$(this).parent().parent().css( "display", "none" );
});
