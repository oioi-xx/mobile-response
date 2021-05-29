(function($, window, document, undefided){
	let s3Con=s3z=0;
	let winW3=1360; //기준값
	let conH3=winW3*0.4117;
	let pagW=$('.pageImageBtn-wrap').innerWidth();
	let pagH=pagW*0.41875;
	$('.pageImageBtn-wrap').css({height:pagH });
	$('#moripKorea .content').css({height: conH3});
	
	
	function s3ResizeFn(){
		if($(window).innerWidth() <= 1360){
			winW3=$(window).innerWidth();
		}else{
			winW3=1360;
		}
		conH3=winW3*0.4117;
		$('#moripKorea .content').css({height: conH3});
		
		pagW=$('.pageImageBtn-wrap').innerWidth();
		pagH=pagW*0.41875;
		$('.pageImageBtn-wrap').css({height:pagH });
	}
	$(window).resize(function(){
		s3ResizeFn();
	});
	setTimeout(s3ResizeFn,100);
	
	
	/* 슬라이드 함수 */
	function nextS3SliderFn(){
		imagePageEventFn();
		$('.s3Slider').css({zIndex:1}).animate({opacity:0},0);
		$('.s3Slider').eq( (s3Con-1)<0? 2:s3Con-1).css({zIndex:2}).animate({opacity:1},0);
		$('.s3Slider').eq(s3Con).css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},1000);
		
	}
	function prevS3SliderFn(){
		imagePageEventFn();
		$('.s3Slider').css({zIndex:1}).animate({opacity:0},0);
		$('.s3Slider').eq(s3Con).css({zIndex:2}).animate({opacity:1},0);
		$('.s3Slider').eq( (s3Con+1)>2? 0:s3Con+1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},1000);
	}
	
	function nextS3CountSlideFn(){
		s3Con++;
		if(s3Con>2){
			s3Con=0;
		}
		nextS3SliderFn()
	}
	function prevS3CountSlideFn(){
		s3Con--;
		if(s3Con<0){
			s3Con=2;
		}
		prevS3SliderFn();
	}
	$('.arrRBtn').on({
		click:function(){
			nextS3CountSlideFn();
		}
	});
	
	$('.arrLBtn').on({
		click:function(){
			prevS3CountSlideFn();
		}
	});
	
	function imagePageEventFn(){
		if(s3Con==0){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide1.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		}else if(s3Con==1){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		} else if(s3Con==2){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide1.jpg)'});
		}
	}
	
	$('.pageImageBtn').each(function(index){
		$(this).on({
			click:function(){
				if(s3Con==0){//첫번째 슬라이드 실행중이고
					if(index=0){//두번째 슬라이드 클릭한 경우
						s3Con=1;
						nextS3SliderFn();
					}else{ //세번째 슬라이드 클릭한 경우
						s3Con=2;
						nextS3SliderFn();
					}
				}else if(s3Con==1){//두번째 슬라이드 실행중이고
					if(index=0){//첫번째 슬라이드 클릭한 경우
						s3Con=0;
						prevS3SliderFn();
					}else{ //세번째 슬라이드 클릭한 경우
						s3Con=2;
						nextS3SliderFn();
					}
				}else if(s3Con==2){//세번째 슬라이드 실행중이고
					if(index=0){//첫번째 슬라이드 클릭한 경우
						s3Con=0;
						prevS3SliderFn();
					}else{//두번쨰 슬라이드 클릭한 경우
						s3Con=1;
						prevS3SliderFn();
					}
				}
			}
		});
	});
	
	
	
})(jQuery, window, document);

