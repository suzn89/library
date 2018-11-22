jQuery(document).ready(function(){
	$('.rollover').each(function(){
		var a = $(this);		//메서드 쓸려고 this를 제이쿼리 객체로 만듬
		var img = a.find('img');	// 하위항목에서 찾음
		var src_off = img.attr('src')
		var src_on = src_off.replace('_off','_on');
		
		//on이미지 준비상태로 미리 로드
		$('<img />').attr('src',src_on);
		// <img src="images/menu01_on.png" />
		// <img src="images/menu02_on.png" />
		// <img src="images/menu03_on.png" />
		
		a.bind('mouseenter focus', function(){
			img.attr('src',src_on);
		});  // 묶어준다. 메서드 2개
		a.bind('mouseleave blur', function(){
			img.attr('src',src_off);
		});
		
		
		/* a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);	 */
	});	//반복문 (순환) - 1부터 3까지 반복
});