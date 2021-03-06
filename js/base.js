// JavaScript Document
var hm={
	alert:function(title,text,buttonText){
		if($(".hm-alert").length>0){
			$(".hm-alert").remove();
		}
		$("body").append('<div class="hm-alert"><ul class="hm-alert-box"><li class="hm-alert-title">'+title+'</li><li class="hm-alert-text">'+text+'</li><li class="hm-alert-btn"><a href="javascript:void(0)" onClick="closeAlert(this)">'+buttonText+'</a></li></ul></div>');
		alertMiddle();
	},
	tip:function(text){
		if($(".tip").length>0){
			$(".tip").remove();
		}
		$("body").append('<div class="tip"><p class="tip-text">'+text+'</p></div>');
		$(".tip").show();
		middle(".tip-text");
		setTimeout(function(){
			$(".tip").hide();
		},1500);
	},
	showLoading:function(text){
		if($(".PLoading").length>0){
			$(".PLoading").remove();
		}
		$("body").append('<div class="PLoading"><ul class="PLoading-box"><li class="PLoading-text">'+text+'</li></ul></div>');
		middle(".PLoading-box");
	},
	hideLoading:function(time){
		setTimeout(function(){
			$(".PLoading").remove();
		},time);
	},
	showLoading2:function(text){
		if($(".loadingButtonWin").length>0){
			$(".loadingButtonWin").remove();
		}
		$("body").append('<div class="loadingButtonWin"></div>');
		$(".loadingButton").text(text);
	},
	hideLoading2:function(time,text){
		setTimeout(function(){
			if($(".loadingButtonWin").length>0){
				$(".loadingButtonWin").remove();
			}
			$(".loadingButton").text(text);
		},time);
	},confirm:function(text,isFunction,elseFunction){
		if($(".confim").length>0){
			$(".confim").remove();
		}
		$("body").append('<div class="confim"><div class="confim_box"><ul><li>'+text+'</li></ul><ol><li class="queding">确定</li><li class="quxiao">取消</li></ol></div></div>');
		$(".queding").click(isFunction);
		$(".quxiao").click(elseFunction);
		
	}
}


function middle(obj){
	var top=($("body").outerHeight()-$(obj).outerHeight())/2;
	var left=($("body").outerWidth()-$(obj).outerWidth())/2;
	$(obj).css({"top":top+"px","left":left+"px"});
}

function alertMiddle(){
	var maTop=($(".hm-alert").outerHeight()-$(".hm-alert-box").outerHeight())/2;
	$(".hm-alert-box").css("margin-top",maTop+"px");
}

function closeAlert(obj){
	$(obj).parents(".hm-alert").remove();
}


function checkbox(){
	$(".checkbox").each(function(index, element) {
        if($(element).prop("checked")){
			$(element).parents(".checkbox-box").addClass("active");
		}else{
			$(element).parents(".checkbox-box").removeClass("active");
		}
    });
	
	$(".checkbox").change(function(){
		if($(this).prop("checked")){
			$(this).parents(".checkbox-box").addClass("active");
		}else{
			$(this).parents(".checkbox-box").removeClass("active");
		}
	});
}
var app = {
	time:null,
	alert:function(text){
		if($('.alert').length > 0) return;
		text = text ? text : '提示';
		clearTimeout(this.time);
		var div = '<div class="alert">'+ text +'</div>';
		$("body").append(div);
		this.time = setTimeout(function(){
			$(".alert").remove();
			text = '';
		},1500)
	}
}


window.onload = function(){
	if(browser.versions.ios){
		$(".footer").css("padding-bottom","50px");
	}
}

var tip = {
	x:null,
	alert:function(value){
		clearTimeout(tip.x);
		if(!value) value = '提示';
		var d = '<div class="tip-mask">'+value+'</div>';
		$('body').append(d);
		tip.x =setTimeout(function(){
			tip.remove();
		}, 1500)
	},
	remove:function(){
		$(".tip-mask").remove();
	}
}