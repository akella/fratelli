$(document).ready(function() {

//window
var wnd_width = $(window).width();
var wnd_height = $(window).height();
//cover width and height
function cover() {	
	var wnd_width = $(window).width();
	var wnd_height = $(window).height();
	$('.cover ul, .cover li, .news, .video').css({'width': wnd_width + 'px', 'height': wnd_height - 121 + 'px'});
	$('.news__list').css({'width': wnd_width - 10 + 'px', 'height': wnd_height - 141 + 'px'});
	$('.collection, .collection__wrap').css({'width': wnd_width - 40 + 'px', 'height': wnd_height - 161 + 'px'});
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
//collection pictures
function collection_pic() {	
	$('.collection__pic img').each(function() {
		var coll_pic_width = $(this).width();
		$(this).parent().css('width', coll_pic_width + 'px');
	});
}
//functions
cover();
cover_detail();
cover_slider();
//collection_btn();
//resize
$(window).resize(function () {
	cover();
	cover_detail();
	cover_slider();	
	news_blocks();
	news_scroll();
	collection_pic();	
});
//button nav
$('.nav-btn').click(function() {
	if ($(this).hasClass('nav-btn_open')) {
		$(this).removeClass('nav-btn_open');
		$('.nav_mod').slideUp();
	}
	else {
		$(this).addClass('nav-btn_open');
		$('.nav_mod').slideDown();
	}
});
//article scroll
$('.article__scroll').click(function() {
	art_pic = $('.article__pic').height();
	$('body').scrollTo(art_pic + 'px', 600);
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
function btn_tab_remove() {
	if ($('.tabs__menu li:first').hasClass('active')) {
		$('.tabs__prev').hide();
	}
	else {
		$('.tabs__prev').show();
	};
	if ($('.tabs__menu li:last').hasClass('active')) {
		$('.tabs__next').hide();
	}
	else {
		$('.tabs__next').show();
	};
}
btn_tab_remove();
$('.tabs__menu li').click(function() {	
	$('.tabs__menu li').removeClass('active');
	$(this).addClass('active');
	var tab = $(this).attr('data-item');
	$('.tabs__content').scrollTo($('#' + tab), 600, {easing: 'easeInQuint'});
	btn_tab_remove();
});
$('.tabs__next').click(function() {	
	var tab_next = $('.tabs__menu li.active').next().attr('data-item');
	$('.tabs__menu li.active').removeClass('active').next().addClass('active');	
	$('.tabs__content').scrollTo($('#' + tab_next), 600, {easing: 'easeInQuint'});
	btn_tab_remove();
});
$('.tabs__prev').click(function() {	
	var tab_prev = $('.tabs__menu li.active').prev().attr('data-item');
	$('.tabs__menu li.active').removeClass('active').prev().addClass('active');	
	$('.tabs__content').scrollTo($('#' + tab_prev), 600, {easing: 'easeInQuint'});
	btn_tab_remove();
});


// $('.tabs__content').scrollable({
// 	easing: 'easeInQuint',
// 	speed: 500,
// 	items: '.tabs__groups',
// 	prev: '.tabs__prev',
// 	next: '.tabs__next'
// }).navigator({
// 	navi: '.tabs__menu'
// });

//collection
$('.collection__info').click(function() {
	$(this).hide();
	$(this).next().fadeIn();
});
$('.collection__price .btn').click(function() {
	$(this).hide();
	$(this).parent().next().slideDown();
});
$('.collection__right').live('click', function() {	
	$('.collection__wrap').scrollTo( {top:'0px', left:'+=250px'}, 600);
	$('.collection__left').show();
});
$('.collection__left').live('click', function() {
	$('.collection__wrap').scrollTo( {top:'0px', left:'-=250px'}, 600);
});

});