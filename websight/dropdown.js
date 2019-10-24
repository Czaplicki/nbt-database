$(document).ready(function(){

	// $(".entry").children(".head").click(function() {
		// $(this).parent().c
	// });
	$(".entry > .head").click(function(){
		$(this).parent().children(".body").slideToggle(300)
		// $(this).parent().get().scrollIntoView();
	    // $([document.documentElement, document.body]).animate({
	    //     scrollTop: $(this).parent().offset().top
	    // }, 300);

	});
	$(".body").hide()
});
