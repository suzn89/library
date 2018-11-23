jQuery(document).ready(function(){
	$('.accordian').each(function(){
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');
		allDd.hide();
		// allDd.eq(0).show(); 	//기본적으로 처음꺼 열어놓기
		allDt.css('cursor','pointer');
		// allDt.eq(0).css('cursor','defalt'); 활ㄹ성화된거는 마우스디폴트
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();	//동위니까 next
			allDd.hide();
			dd.show();
			allDt.css('cursor','pointer');
			dt.css('sursor','defalt');
		});
	});
});