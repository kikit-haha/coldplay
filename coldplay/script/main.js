$(function () {

	//영상크기 변수
	var wHeight = $(window).height();
	var bgmHeight = $('.bgMovie').height();

	//브라우저의 높이가 영상의 높이보다 작으면
	if (wHeight < bgmHeight) {
		//영상의 높이는 == 윈도우창의 높이
		$('.bgMovie').height(wHeight + 'px');
	}

	$(window).resize(function () {
		if (wHeight < bgmHeight) {
			$('.bgMovie').height($(window).height() + 'px');
		} else {
			$('.bgMovie').height('902');
		}
	});

	//윈도우 가로크기 변수
	var wSize = $(window).width();

	if (wSize >= 1024) { //pc화면일때 만 동작하라
		//패럴랙스 효과
		jQuery('.parallax-layer').parallax({
			mouseport: jQuery("#port"),
			xparallax: 0.1,
			yparallax: 0,
			xorigin: 0.5,
		});
	}
	//팝업창 띄우기
	var popup = '<div class="popup"><p class="p_txt">본사이트는 상업용목적이아닌 개인 포트폴리오 용도로 제작되었습니다. 일부 내용 및 이미지 등은 출처가 따로 있음을 밝힙니다.</p><i class="fas fa-times"></i></div>';
	$('body').append(popup);
	var popupClose = $('.popup i.fas');
	console.log(popupClose);
	popupClose.click(function () {
		console.log('팝업변수값' + $(popup));
		console.log($('팝업클래스' + '.popup'));
		console.log('그냥변수출력' + popup);
		$('.popup').animate({
			'top': '-500px'
		}, 300);
		//								(popup.fadeOut();
		//								$('.popup').fadeOut();
		//								$('.popup').remove();
		//								$('.popup').animate({
		//									'top': '-500px'
		//								}, 300);
		//							});
	});
});
