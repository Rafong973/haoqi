// JavaScript Document
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