$(document).ready(function() {

//window
var wnd_width = $(window).width();
var wnd_height = $(window).height();
//cover width and height
function width_height() {	
	var wnd_width = $(window).width();
	var wnd_height = $(window).height();	
	$('.cover ul, .cover li, .news, .video, .video video, .video-js').css({'width': wnd_width + 'px', 'height': wnd_height - 121 + 'px'});
	$('.news__list').css({'width': wnd_width - 10 + 'px', 'height': wnd_height - 141 + 'px'});
	$('.news__list ul').css({'width': wnd_width - 10 + 'px', 'height': wnd_height - 141 + 'px'});
	if (wnd_width > 480) {
		$('.collection_base, .collection__wrap_base').css({'width': wnd_width - 40 + 'px', 'height': wnd_height - 161 + 'px'});
		$('.collection_popup, .collection__wrap_popup').css({'width': wnd_width - 40 + 'px', 'height': wnd_height - 40 + 'px'});
	}
	else {
		$('.collection_base, .collection__wrap_base').css({'width': 'auto', 'height': 'auto'});
		$('.collection_popup, .collection__wrap_popup').css({'width': 'auto', 'height': 'auto'});
	}
	//video
	$('.video-js').attr({'width': wnd_width, });
	$('.video-js').attr('height', wnd_height - 121);
	//director pic
	if (wnd_width > 960) {
		$('.director img').css('height', wnd_height - 121 + 'px');
		$('.tabs__map iframe').attr('width', '720');
		$('.tabs__content').height(387);
	}
	else {
		$('.director img').css('height', 'auto');
		$('.tabs__map iframe').attr('width', wnd_width - 20);
		$('.tabs__content').height(wnd_height - 240);
	}
	$('.cover li').css('z-index', '0');
}
//cover details
function cover_detail() {
	var wnd_width = $(window).width();
	var cvr_width = $('.cover__detail').width();
	var cvr_height = $('.cover__detail').height();
	if (wnd_width > 960) {	
		$('.cover__detail').css({'margin-top': -cvr_height/2 - 30 + 'px', 'margin-left': -cvr_width/2 + 210 + 'px'});
	}
	else {
		$('.cover__detail').css({'margin-top': '0px', 'margin-left': '0px'});
	}
}
//cover slider
function cover_slider() {	
	if ($('.cover ul').length>0) {
		$('.cover ul').cycle({ 
		    fx: 'fade', 
		    speed: 300, 
		    timeout: 2000
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
		itemSelector: '.news__list li',
		isAnimated: true,
	  	animationOptions: {
	   		duration: 500
	  	}
	});
}
//collection pictures
function collection_pic() {	
	$('.collection__pic img').each(function() {
		var coll_pic_width = $(this).width();
		$(this).parent().css('width', coll_pic_width + 'px');
	});
}
//nav drop
function main_nav() {	
	var wnd_width = $(window).width();
	if (wnd_width <= 960) {
		$('.nav').addClass('nav_resize');
		$('.nav').removeClass('nav_normal');	
		$('.lang').addClass('lang_resize');
		$('.lang').removeClass('lang_normal');
	}
	else {
		$('.nav').addClass('nav_normal');
		$('.nav').removeClass('nav_resize');
		$('.lang').addClass('lang_normal');
		$('.lang').removeClass('lang_resize');
	}
}
$('.nav_resize .nav__title').live('click', function() {
 	if ($(this).hasClass('active')) {
 		$(this).removeClass('active');
 		$(this).next().slideUp();
 	}
 	else {
 		$(this).addClass('active');
 		$(this).next().slideDown(); 
 	}
});
$('.nav_resize .nav__list a').live('click', function() {
 	var nav_item = $(this).text();
 	$('.nav__title').removeClass('active');
 	$('.nav__drop').slideUp();
 	$('.nav__title span').html(nav_item + '<i></i>');
 	return false;
});
//columns anchor
function columns_anchor() {
	var wnd_width = $(window).width();
	if (wnd_width > 960) { 
 		$('.columns').each(function() {
 			var clm_anchor = $(this).children('.columns__anchor');
 			var clm_width = clm_anchor.position().left;
 			var clm_width = clm_width + 245;
 			var clm_res = clm_width/245;
 			var clm_res = Math.round(clm_res);
 			var clm_res = clm_res*245 - 20;
  		$(this).width(clm_res);
 		});
 	};
}
//functions
main_nav();
width_height();
cover_detail();
cover_slider();
columns_anchor();
//window resize
$(window).resize(function () {
	main_nav();	
	width_height();
	cover_detail();
	cover_slider();	
	news_blocks();
	setInterval(news_scroll, 600);
	collection_pic();	
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
//button nav
$('.nav-btn').click(function() {
	if ($(this).hasClass('nav-btn_open')) {
		$(this).removeClass('nav-btn_open');
		$('.nav-wrap_mod').slideUp();
	}
	else {
		$(this).addClass('nav-btn_open');
		$('.nav-wrap_mod').slideDown();
	}
});
//article scroll
$('.article__scroll').click(function() {
	art_pic = $('.article__pic').height();
	$('body').scrollTo(art_pic + 'px', 600);
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
//lang select
$('.lang_normal .lang__list span').click(function() {
	if ($(this).parent().hasClass('open')) {
		$(this).parent().removeClass('open');
		$(this).next().slideUp();		
	}
	else {$(this).parent().addClass('open').children('ul').slideDown();}
});
$('.lang__list li').click(function() {
	var nav_sel = $(this).text();	
	var lang_sel = $(this).parent().prev().text();	
	$(this).parent().parent().removeClass('open');
	$(this).parent().prev().html(nav_sel);
	$(this).html(lang_sel);
	$(this).parent().hide();	
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
	$('.tabs__prev').show();
	var wnd_width = $(window).width();	
	if (wnd_width >= 960) {
		$('.tabs__content').scrollTo('+=980px', 600, {easing: 'easeInQuint'});
	}
	else {
		var wnd_height = $(window).height();
		var wnd_height = wnd_height - 240;
		$('.tabs__content').scrollTo('+='+ wnd_height +'px', 600, {easing: 'easeInQuint'});
	}
});
$('.tabs__prev').click(function() {	
	$('.tabs__next').show();
	var wnd_width = $(window).width();
	if (wnd_width >= 960) {
		$('.tabs__content').scrollTo('-=980px', 600, {easing: 'easeInQuint'});
	}
	else {
		var wnd_height = $(window).height();
		var wnd_height = wnd_height - 240;
		$('.tabs__content').scrollTo('-='+ wnd_height +'px', 600, {easing: 'easeInQuint'});
	}		
});
function tabs_width() {
	var wnd_width = $(window).width();
	if (wnd_width > 960) {
		var tw_sum = 0;
		$('.js-tw').each(function() {
			tw_sum = tw_sum + $(this).width()+20; 	
		});
		$('.tabs__inner').width(tw_sum-20);
	};
}
tabs_width();
//collection
$('.collection__info').hover(function() {
	$(this).fadeOut();
	$(this).next().fadeIn();
});
$('.collection__detail').hover(function() {},
	function() {
		$(this).fadeOut();
		$(this).prev().fadeIn();
});
$('.collection__price .btn').click(function() {
	$(this).hide();
	$(this).parent().next().slideDown();
	$(this).next().fadeIn();
});
$('.collection__detail-close').click(function() {
	$(this).parent().fadeOut();
	$(this).parent().prev().fadeIn();
});
$('.collection__message .btn').click(function() {
	$(this).parent().parent().fadeOut();
	$(this).parent().parent().prev().fadeIn();
});
$('.collection__send input').click(function() {
	$(this).parent().parent().hide();
	$(this).parent().parent().prev().hide();
	$(this).parent().parent().next().show();
	return false; //УДАЛИТЬ КОГДА БУДЕТЕ ПРИВЯЗЫВАТЬ!!!
});
$('.collection__right').click(function() {
	var scrto_next = $('.collection__list li.collection__scrto').next().attr('id');	
	$('.collection__list li.collection__scrto').removeClass('collection__scrto').next().addClass('collection__scrto');	
	$('.collection__wrap').scrollTo($('#' + scrto_next), 600, {
		easing: 'easeInQuint', 
		onAfter: function() { 
			var coll_left = $('.collection__list').position().left;
			var coll_list_width = $('.collection__list').width();
			var coll_wrap_width = $('.collection__wrap').width();
			var coll_last_pic = $('.collection__pic:last').width();
			var coll_result = coll_wrap_width - coll_list_width;
			if (coll_wrap_width < coll_last_pic) {
				if ($('.collection__pic:last').hasClass('collection__scrto')) {
					$('.collection__right').fadeOut();
				}
				else {
					$('.collection__right').fadeIn();
				};
			}
			else {
				if (coll_left == coll_result) {
					$('.collection__right').fadeOut();
				}
				else {
					$('.collection__right').fadeIn();
				};
			}
		}
	});
	$('.collection__left').fadeIn();
});
$('.collection__left').click(function() {
	var scrto_prev = $('.collection__list li.collection__scrto').prev().attr('id');
	$('.collection__list li.collection__scrto').removeClass('collection__scrto').prev().addClass('collection__scrto');	
	$('.collection__wrap').scrollTo($('#' + scrto_prev), 600, {
		easing: 'easeInQuint',
		onAfter: function() {
			var coll_left = $('.collection__list').position().left;
			if (coll_left == 0) {
				$('.collection__left').fadeOut();
			}
			else {
				$('.collection__left').fadeIn();
			};
		}
	});
	$('.collection__right').fadeIn();
});

});