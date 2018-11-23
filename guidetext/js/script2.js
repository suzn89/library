jQuery(document).ready(function(){
	var guideClass = 'guide';
	$('.guideText').each(function(){
		var guideText = this.defaultValue; 	//이름을 입력해주세요
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass(guideClass);
			};
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass(guideClass);
			};
		});  // 입력한거 없을때 살려내야지  (위에꺼 기준 blur 되었을때)
		if(element.val()===guideText) {
			element.addClass(guideClass);	//처음에 로드되고 아무것도 안한상태
		}
	});
});
