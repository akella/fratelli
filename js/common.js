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
	if ($('.cover ul').length>0) {
		$('.cover ul').cycle({ 
		  fx:     'fade', 
		  speed:   1000, 
		  timeout: 3000
		});
	};	
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
	$('.news').slideDown(600, 'easeInQuint');
	news_blocks();
	news_scroll();
	return false;
});
//news close
$('.news__close').click(function() {
	$('.news').slideUp(600, 'easeInQuint');
	return false;
});
//contacts
$('.tabs__phones dt').click(function() {
	if ($(this).hasClass('active')) {}
	else {
		$('.tabs__phones dt').removeClass('active');
		$('.tabs__phones dd').slideUp();
		$(this).addClass('active').next().slideDown();
	}
});
//nav select
$('.nav__select span').click(function() {
	if ($(this).hasClass('open')) {}
	else {$(this).addClass('open').next().slideDown();}
});
$('.nav__select li').click(function() {
	var nav_sel = $(this).text();
	$(this).parent().prev().removeClass('open').html(nav_sel);
	$(this).parent().slideUp();
});
//select
$('.txt-field_select span').click(function() {	
	if ($(this).hasClass('open')) {
		$(this).removeClass('open').next().slideUp();
	}
	else {
		$(this).addClass('open').next().slideDown();
	}	
});
$('.txt-field_select li').click(function() {	
	var sel = $(this).text();
	$(this).parent().prev().removeClass('open').html(sel);
	$(this).parent().slideUp();
});
//tabs
$('.tabs__content').scrollable({
	easing: 'easeInQuint',
	speed: 500,
	items: '.tabs__groups',
	prev: '.tabs__prev',
	next: '.tabs__next'
}).navigator({
	navi: '.tabs__menu'
});

});