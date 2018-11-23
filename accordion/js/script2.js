jQuery(document).ready(function(){
	var class_closed = 'closed';
	$('.accordian').each(function(){
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');
		
		function closeAll(){		//사용자정의함수
			allDt.addClass(class_closed);
			allDd.addClass(class_closed);
		};
		function open(dt,dd){	//var dt, dd가 선언		
			dt.removeClass(class_closed);
			dd.removeClass(class_closed);
		};
		
		closeAll();		//처음에 다 닫아놓기
		
		
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();	//동위니까 next
			closeAll();
			open(dt,dd);
		});
	});
});