(function($, window, document, undefided){
	let imgW=$('#traveLounge .caption').innerWidth()*0.594;
	let winW=$(window).innerWidth();
	let conW=$('#traveLounge .container').innerWidth();
	let col=3;
	let s4SliderW=conW/col;
	
	$('.s4Slider').css({width:s4SliderW});
	$('.s4Slider-wrap').css({width:(s4SliderW*12), marginLeft:-(s4SliderW*3) });
	$('.s4Slider-content .image').css({width:imgW, height:imgW});
	
	let s4Cnt=z=setId4=0;
	
	function s4ResizeFn(){
		imgW=$('#traveLounge .caption').innerWidth()*0.594;
		winW=$(window).innerWidth();
		conW=$('#traveLounge .container').innerWidth();
		
		if(winW>1024){
			col=3;
		}else if(winW >600){
			col=2;
		}else{
			col=1;
		}
		
		s4SliderW=conW/col;
		$('.s4Slider').css({width:s4SliderW});
		$('.s4Slider-wrap').css({width:(s4SliderW*12), marginLeft:-(s4SliderW*3) });
		$('.s4Slider-content .image').css({width:imgW, height:imgW});
		
		$('.s4Slider-wrap').stop().animate({left: -(s4SliderW*s4Cnt)},0);
	}
	s4ResizeFn();
	$(window).resize(function(){
		s4ResizeFn();
	});
	setTimeout(s4ResizeFn,100);
	
	/* 테두리 애니메이션 */
	$('.slideBtn').on({
		mouseenter:function(){
			$(this).prev().find('i').eq(0).animate({width: 100+'%'},300);
			$(this).prev().find('i').eq(1).animate({height: 100+'%'},300);
			$(this).prev().find('i').eq(2).animate({width: 100+'%'},300);
			$(this).prev().find('i').eq(3).animate({height: 100+'%'},300);
		},mouseleave:function(){
			$(this).prev().find('i').eq(0).animate({width: 0},300);
			$(this).prev().find('i').eq(1).animate({height: 0},300);
			$(this).prev().find('i').eq(2).animate({width: 0},300);
			$(this).prev().find('i').eq(3).animate({height: 0},300);
		},focusin:function(){
			$(this).prev().find('i').eq(0).animate({width: 100+'%'},300);
			$(this).prev().find('i').eq(1).animate({height: 100+'%'},300);
			$(this).prev().find('i').eq(2).animate({width: 100+'%'},300);
			$(this).prev().find('i').eq(3).animate({height: 100+'%'},300);
		}, focusout:function(){
			$(this).prev().find('i').eq(0).animate({width: 0},300);
			$(this).prev().find('i').eq(1).animate({height: 0},300);
			$(this).prev().find('i').eq(2).animate({width: 0},300);
			$(this).prev().find('i').eq(3).animate({height: 0},300);
		}
	});
	/* 메인 슬라이드 함수 */
	
	function s4SliderFn(){
		$('.s4Slider-wrap').stop().animate({left: -(s4SliderW*s4Cnt)},600, function(){
			if(s4Cnt>5){s4Cnt=0}
			if(s4Cnt<0){s4Cnt=5}
			$('.s4Slider-wrap').stop().animate({left: -(s4SliderW*s4Cnt)},0)
		});
		pageEventFn(s4Cnt);
	}
	
	function nextCountFn(){
		s4Cnt++;
		s4SliderFn();
	}
	function prevCountFn(){
		s4Cnt--;
		s4SliderFn();
	}
	
	/* 페이지 함수 */
	function pageEventFn(z){
		if(z>5){z=0;}
		$('.pageBtn').removeClass('addPages4');
		$('.pageBtn').eq(z).addClass('addPages4');
	}
	
	$('.pageBtn').each(function(idx){
		$(this).on({
			click:function(){
				clearInterval(setId4);
				s4Cnt=idx;
				s4SliderFn();
			}
		});
	});
	
	autoTimerS4Fn();
	function autoTimerS4Fn(){
		setId4=setInterval(nextCountFn,4000)
	}
	
	
	$('.s4Slider-container').swipe({
		swipeLeft: function(){
			if(!$('.s4Slider-wrap').is(':animated')){
				nextCountFn()
			}
		},swipeRight:function(){
			if(!$('.s4Slider-wrap').is(':animated')){
				prevCountFn()
			}
		}
	});
})(jQuery, window, document);























