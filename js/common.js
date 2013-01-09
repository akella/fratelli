$(document).ready(function() {

//window
var wnd_width = $(window).width();
var wnd_height = $(window).height();
//cover width and height
function cover() {	
	var wnd_width = $(window).width();
	var wnd_height = $(window).height();
	$('.cover ul, .cover li, .news').css({'width': wnd_width + 'px', 'height': wnd_height - 121 + 'px'});
	$('.news__list').css({'width': wnd_width - 20 + 'px', 'height': wnd_height - 141 + 'px'});
}
//cover details
function cover_detail() {
	var cvr_width = $('.cover__detail').width();
	var cvr_height = $('.cover__detail').height();
	$('.cover__detail').css({'margin-top': -cvr_height/2 - 30 + 'px', 'margin-left': -cvr_width/2 + 210 + 'px'});
}
//cover slider
function cover_slider() {
	$('.cover ul').cycle({ 
	    fx:     'fade', 
	    speed:   1000, 
	    timeout: 3000
	});
}
//news scroll
function news_scroll() {
	$('.news__list').jScrollPane();
}
//news masonry blocks
function news_blocks() {
	$('.news__list ul').masonry({
		itemSelector: '.news__list li'
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
	news_blocks();
	news_scroll();
});
//news open
$('.nav__new').click(function() {
	if ($(this).hasClass('nav__new_is')) {
		$(this).removeClass('nav__new_is');
	};
	$('.news').slideDown();
	news_blocks();
	news_scroll();
	return false;
});
//news close
$('.news__close').click(function() {
	$('.news').slideUp();
	return false;
});




});