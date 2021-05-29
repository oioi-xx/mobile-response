(function($, window, document, undefided){
	let cnt=winW=winH=z=setId=setId2=count=0;
	let wheelDelta;
	
	function resizeFn(){
		winW=$(window).innerWidth();
		winH=$(window).innerHeight();
		
		$('.slide').css({width:winW, height:winH});
		$('.mainSlide-wrap').stop().animate({left:-(winW*cnt)},0);
	}
	$(window).resize(function(){
		resizeFn();
	});
	setTimeout(resizeFn,100);
	
	/* 메인슬라이드함수 */
	function mainSlideFn(){
		$('.mainSlide-wrap').stop().animate({left:-(winW*cnt)},800,'easeInOutExpo', function(){
			if(cnt>2){cnt=0}
			if(cnt<0){cnt=2}
			$('.mainSlide-wrap').stop().animate({left:-(winW*cnt)},0);
		});
		cnt>2?z=0:z=cnt;
		pageEventFn();
	}
	function pageEventFn(){
		$('.mainSlidePageBtn').removeClass('addPage');
		$('.mainSlidePageBtn').eq(z).addClass('addPage');	
	}
	
	/* 페이지 버튼 클릭 이벤트 */
	$('.mainSlidePageBtn').each(function(idx){
		$(this).on({click:function(){
				cnt=idx;
				mainSlideFn();
				pauseTimerFn()
			}
		});
	});
	
	/* 마우스휠 */
	$('#mainSlide').on('mousewheel DOMMouseScroll', function(event){
		event.preventDefault();
		if(event.detail){
			wheelDelta=event.detail*-1;
		}else{
			wheelDelta=event.originalEvent.wheelDelta;
		}
		
		if(wheelDelta<0){
			if(!$('.mainSlide-wrap').is(':animated')){
				pauseTimerFn();
				nextCountFn();
				if(cnt>2){
					const st=$('#moripCollection').offset().top;
					$('body,html').stop().animate({scrollTop:st},600);
				}
			}
		}else{
			if(!$('.mainSlide-wrap').is(':animated')){
				prevCountFn();
				pauseTimerFn();
			}
		}
	});

	/* 다음 */
	function nextCountFn(){
		cnt++;
		mainSlideFn();
	}
	/* 이전 */
	function prevCountFn(){
		cnt--;
		mainSlideFn();
	}
	
	/* 다음 버튼 클릭 이벤트 */
	$('.mainSlideNextBtn').click(function(){
		if(!$('.mainSlide-wrap').is(':animated')){
			nextCountFn();
			pauseTimerFn();
		}
	});
	/* 이전 버튼 클릭 이벤트 */
	$('.mainSlidePrevBtn').click(function(){
		if(!$('.mainSlide-wrap').is(':animated')){
			prevCountFn();
			pauseTimerFn();
		}
	});
	
	/* 터치이벤트 */
	$('.mainSlide-view').swipe({
		swipeLeft: function(){
			if(!$('.mainSlide-wrap').is(':animated')){
				nextCountFn();
				pauseTimerFn();
			}
		},swipeRight:function(){
			if(!$('.mainSlide-wrap').is(':animated')){
				prevCountFn();
				pauseTimerFn();
			}
		}
	});
	
	/* 자동 슬라이드 함수 */
	function autoTimerFn(){
		setId=setInterval(nextCountFn,4000)
	}
	autoTimerFn();
	
	/* 일시정지 함수 5초간 이벤트가 없으면 자동 재실행 */
	function pauseTimerFn(){
		count=0;
		clearInterval(setId);
		clearInterval(setId2);
		
		setId2=setInterval(function(){
			count++;
			if(count >=5){
				nextCountFn();
				autoTimerFn();
				clearInterval(setId2);
			}
		},1000);
	}
	
	$('.nextBtn').on({
		//click:function(event){
		click: event =>{
			event.preventDefault();
			const st=$('#moripCollection').offset().top;
			$('body,html').stop().animate({scrollTop:st},600);
		}
	});
	
	
	
	
})(jQuery, window, document);

