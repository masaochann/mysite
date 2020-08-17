$(function(){
	$("#toggle dt").on("click", function() {
		$(this).next().slideToggle();
	});
});

$(document).ready(function()
{
	
	/*上に戻るボタン＆headermenu固定*/
	var showFlug = false;
	var box = $("#header");
	var topBtn = $('#gototop');
	topBtn.hide();
	$(window).scroll(function()
	{
		if($(this).scrollTop() > 104)
		{
			if(showFlug == false)
			{
				showFlug = true;
				topBtn.fadeIn();
				box.addClass("header_fixed")
			}
		}
		else
		{
			if(showFlug)
			{
				topBtn.fadeOut();
				showFlug = false;
				box.removeClass("header_fixed")
			}
		}
	});

	// ヘッダーメニュー
	$("#header_menu li").not('.on').hover(function(){
		// on（最初に無理やりスタイル適用しておく）
		$(this).find("span").stop().velocity({
			'opacity':'1.0',
			'scaleX':'0.7',
			'scaleY':'0.7'
			}, { duration: 0 });
		$(this).find("p").stop().velocity({
			'opacity':'0.5',
			'rotateZ': "-180deg",
			'scaleX':'0.7',
			'scaleY':'0.7'
			}, { duration: 0 });
		$(this).find("span").stop().velocity({
			'opacity':'1.0',
			'scaleX':'1.0',
			'scaleY':'1.0'
			}, { duration: 300, easing: 'ease-in-out' });
		$(this).find("p").stop().velocity({
			'opacity':'1.0',
			'rotateZ': "0deg",
			'scaleX':'1.0',
			'scaleY':'1.0'
			}, { duration: 300, easing: 'ease-in-out' });
		$(this).find("a img").stop().velocity({
			'opacity':'0.5'
			}, { duration: 200, easing: 'ease-in-out' });
	},function(){
		// off
		$(this).find("span").stop().velocity({
			'opacity':'1.0',
			'scaleX':'0.7',
			'scaleY':'0.7'
			}, { duration: 300, easing: 'ease-in-out' });
		$(this).find("p").stop().velocity({
			'opacity':'0.5',
			'rotateZ': "180deg",
			'scaleX':'0.7',
			'scaleY':'0.7'
			}, { duration: 300, easing: 'ease-in-out' });
		$(this).find("a img").stop().velocity({
			'opacity':'1.0'
			}, { duration: 200, easing: 'ease-in-out' });
	});
	
	// ヘッダーブランドロゴ
	$("#header_logo a").hover(function(){
		$(this).stop().velocity({
			'opacity':'0.7'
			}, { duration: 100});
	},function(){
		$(this).stop().velocity({
			'opacity':'1.0'
			}, { duration: 100});
	});

	// スライダー
	$('.flexslider').flexslider({
		animation: "slide",
		slideshowSpeed: 4000,
		animationDuration: 1000,
		directionNav: true,
		controlNav: true,
		animationLoop: true,
		controlsContainer: ".flexslider-container"
	});
	
	// 汎用画像オンマウス
	$(".alpha").hover(function(){
		$(this).stop().velocity({
			'opacity':'0.7'
			}, { duration: 100});
	},function(){
		$(this).stop().velocity({
			'opacity':'1.0'
			}, { duration: 100});
	});

	// #リンクのスクロール処理
	$('a.scroll[href^=#]').click(function ()
	{
	    var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
	    target.velocity("scroll", { duration: 500, easing: "ease-in-out" });
	});
	
	// colorbox
	$('.popup').colorbox();


});