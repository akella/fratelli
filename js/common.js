$(document).ready(function() {

//window
var wnd_width = $(window).width();
var wnd_height = $(window).height();
//cover width and height
function cover() {	
	var wnd_width = $(window).width();
	var wnd_height = $(window).height();
	$('.cover, .cover li').css({'width': wnd_width + 'px', 'height': wnd_height - 121 + 'px'});
}
//cover details
function cover_detail() {
	var cvr_width = $('.cover__detail').width();
	var cvr_height = $('.cover__detail').height();
	$('.cover__detail').css({'margin-top': -cvr_height/2 - 30 + 'px', 'margin-left': -cvr_width/2 + 210 + 'px'});
}
//cover slider
function cover_slider() {
	$('.cover').carouFredSel({
		items: 1,
		prev: ".cover-nav__prev",
		next: ".cover-nav__next",
		scroll: {
			easing: "easeInOutCirc"
		},
		auto: {
			duration: 500,
			timeoutDuration: 4000
		}
	});
}
//functions
cover();
cover_detail();
cover_slider();
//resize
$(window).resize(function () {
	cover();
	cover_detail();
	cover_slider();
});
//


});