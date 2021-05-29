(function(){
	var scr=t=app=winW=r=gnbH=0;
	gnbH=$('.gnb').innerHeight();
	
	$(window).resize(function(){
		resizeFn();
	});
	function resizeFn(){
		gnbH=$('.gnb').innerHeight();
		winW=$(window).innerWidth();
		
		if(winW >900){
			if(r==0){
				r=1;
				$('.sub').stop().slideUp(0);
				$('gnb').on({
					mouseleave:function(){
						$('.sub').stop().slideUp(300);
					}
				});
			}
		}else{
			if(r==1){
				r=0;
				$('.sub').stop().slideDown(0);
				$('.gnb').off('mouseleave');
			}
		}
	}
	
	$('#header').on({
		mouseenter:function(){
		$('#header').addClass('addFixed');
	},click:function(){
		$('#header').addClass('addFixed');
	}, mouseleave:function(){
		if(scr==0 && app==0){//스크롤을 안한경우 그리고 GNB가 안보인경우
			$('#header').removeClass('addFixed');
			$('.gnb').hide();//올라가는 순간 보일수있도록 감춤
		}
	}
	});
	$('.gnb nav>ul>li>div').on({mouseenter:function(){
		$(this).find('.sub').slideDown();
	},mouseleave:function(){
		$(this).find('.sub').slideUp();
	}
	});
	
	/* 앱버튼 */
	$('.appBarBtn').on({click:function(){
		$(this).toggleClass('addAppbar');
		if(app==0){
			app=1;
			$('.gnb').stop().show().animate({top:-2},300);
		}else{
			app=0;
			$('.gnb').stop().animate({top:-gnbH},300, function(){
				$('.gnb').hide();
			});
		}
	}
	});
	
	/* 스크롤이벤트 */
	$(window).scroll(function(){
		if($(window).scrollTop()>=10){
			scr=1;
			$('#header').addClass('addFixed');
		}else{
			scr=0;
			if(app==0){
				$('#header').removeClass('addFixed');
			}
		}
	});
	
	
	
	
})();