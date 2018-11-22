jQuery(document).ready(function(){
	$('.rollover').each(function(){
		var a = $(this);		//메서드 쓸려고 this를 제이쿼리 객체로 만듬
		var img = a.find('img');	// 하위항목에서 찾음
		var src_off = img.attr('src')
		// scr_off = images/menu01_off.png
		var src_on = src_off.replace('_off','_on');
		// scr_on = images/menu01_on.png
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);	
	});	//반복문 (순환) - 1부터 3까지 반복
});