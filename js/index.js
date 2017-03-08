// JavaScript Document

(function(){
	// active;
	$("[data="+ $("#nav-name").val() +"]").addClass('active');
	// //滚动图swiper.min.js
	var swiperSlide = new Swiper('.swiperSlide', {
		pagination: '.carousel_btn',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		loop: true,
		speed:500,
		autoplay:4000,
		autoplayDisableOnInteraction: false
	});	


	var swiper = new Swiper('.push_box', {
	    pagination: '.push_btn',
	    paginationClickable: true,
	    nextButton: '.push_next',
	    prevButton: '.push_prev',
	    spaceBetween: 30,
	    effect: 'fade'
	});
	// 定位
    var index = $(".active").index();
    var swiper = new Swiper('.nav .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween:0,
        initialSlide :index,
    });

})();
//向上滚动动画
function scrollTops(){
	$("html, body").animate({ scrollTop: 0 }, 200);
}
//点赞
function pushTop(id,thisObj){
	hm.showLoading("正在操作中");
	/*var url="id="+id;
	$.post(url,function(data){
			if(data.status == 1){
				hm.hideLoading(0);
				hm.tip(data.info);
				//成功
				$(thisObj).find("span").text(16);//16是返回的值
				return ;
			}else {
				hm.hideLoading(0);
				hm.tip(data.info);
				return ;
			}
		
	},"json");*/
	
	setTimeout(function(){
		hm.hideLoading(0);
		hm.tip("操作成功");
		$(thisObj).find("span").text(16);//16是返回的值
	},2000);
	
	
	
}

//收藏
function collection(id,thisObj){
	hm.showLoading("正在操作中");
	/*var url="id="+id;
	$.post(url,function(data){
			if(data.status == 1){
				hm.hideLoading(0);
				hm.tip(data.info);
				//成功
				$(thisObj).find("span").text(16);//16是返回的值
				return ;
			}else {
				hm.hideLoading(0);
				hm.tip(data.info);
				return ;
			}
		
	},"json");*/
	
	setTimeout(function(){
		hm.hideLoading(0);
		hm.tip("操作成功");
		$(thisObj).find("span").text(16);//16是返回的值
	},2000);
	
}

// 导航栏点击事件
$(".nav-slide").click(function(event) {
	event.stopPropagation();
	$(".nav-ul").hide(300)
	$('.nav-mask').show();
	var ul = $(this).find('ul');
	if(ul.length>0){
		if(ul.is(":visible")){
			ul.hide(300);
			$(this).parents('.swiper-container').css('overflow', 'hidden');
		}else{
			$(this).parents('.swiper-container').css('overflow', 'initial');
			ul.show(300);
		}
	}else{
		
	}
});
$(".nav-mask").click(function(){
	$('.nav-ul').hide(300);
	$('.nav-ul').parents('.swiper-container').css('overflow', 'hidden');
	$(this).hide();
})

$(".nav-li").click(function(event) {
	var url = $(this).attr("data");
	window.location.href = url;
	$('.nav-mask').hide();
});

$(".index_sou").click(function(event) {
	$(".search").css('width', '100%');
	var search = document.getElementsByClassName('search')[0];
	search.addEventListener('touchstart',touch.start,false);
	search.addEventListener('touchmove',touch.move,false);
	search.addEventListener('touchend',touch.end,false);
});

var touch = (function(){
	var x,y;
	return{
		start:function(event){
			event = event || window.event;
			var touches = event.targetTouches;
			x = touches[0].pageX;
		},
		move:function(event){
			event = event || window.event;
			var touches = event.targetTouches;
			y = touches[0].pageX;
			if(y>x){
				if(y-x >= 80){
					$(".search").css('width', '.1px');
					this.value = '';
					this.removeEventListener('touchstart',touch.start,false);
					this.removeEventListener('touchmove',touch.move,false);
				}else{
					return;
				}
			}else{
				if(x-y >= 80){
					$(".search").css('width', '.1px');
					this.value = '';
					this.removeEventListener('touchstart',touch.start,false);
					this.removeEventListener('touchmove',touch.move,false);
				}else{
					return;
				}
			}
		},
		end:function(event){
			event = event || window.event;
			var touches = event.targetTouches;
		}
	}
})();

$(".plus").click(function() {
	var input = $(this).siblings('input');
	var num = parseInt(input.val());
	if(input.val() && num >= 0){
		input.val(num+1);
	}
});

$(".jian").click(function(){
	var input = $(this).siblings('input');
	var num = parseInt(input.val());
	if(input.val() && num > 1){
		input.val(num-1);
	}
})