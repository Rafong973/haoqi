// 获取验证码
$("#getCode").click(function(event) {
    clearInterval(time);
	var tel = $("[name=tel]");
    var cod = $("[name=code]");
    var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3-9][0-9]{9}$)/;
    var time = null;
	if(!tel.val()){
		app.alert("请填写好手机号码");
		return;
	}
    if(!reg.test(tel.val())){
        app.alert("手机号码不正确");
        return;
    }
    if(!cod.val()){
        app.alert("验证码不能为空");
        return;
    }
    $(this).prop('disabled','true');
    $(this).addClass('gray');
    var num = 59;
    var self = $(this);
    time = setInterval(function(){
        self.text(num+'秒后重新获取');
        if(num == 0){
            clearInterval(time);
            self.text("免费获取验证码");
            self.removeProp('disabled');
            self.removeClass('gray');
        }
        num--;
    },1000)
});
//注册
$("#reg").click(function(){
    clearTimeout(time);
	var input = document.getElementsByClassName('input');
	var judge = vail(input);
    var time = null;
    if(window.sessionStorage.getItem("repair")){
        app.alert("请勿重复提交");
        return;
    }
    if(judge){
        // 继续执行
        var data = getdata(input);
        $.post('login', data, function(res) {
            if(res.status == 1){
                app.alert("注册成功，马上带你去登陆");
                setTimeout(function(){
                    window.location.href = 'reg.html';
                },1000)
                window.sessionStorage.setItem("reg",data);
                time = setTimeout(function(){
                    window.sessionStorage.removeItem("reg");
                },5000);
            }else{
                app.alert("注册失败，请重试");
            }
        });
    }else{
        return false;
    }
});
// 忘记密码第一步验证
$("#first").click(function(event) {
	var input = document.getElementsByClassName('input');
	var judge = vail(input);
	if(judge){
		var data = getdata(input);
		$.post('/vaildate', data, function(res) {
			if(res.status==1){
				$(".input").val("");
				$(".first").hide();
				$(".second").show(300);
			}
		});
	}
});
$("#second").click(function(event) {
	var input = document.getElementsByClassName('passVail');
	var judge = vail(input);
	console.log(judge);
	if(judge){
		var data = getdata(input);
		$.post('/reset', data, function(res) {
			if(res.status==1){
				app.alert('修改成功。带你去登陆');
				setTimeout(function(){
					window.location.href = 'index.html';
				},1000)
			}else{
				app.alert('修改失败，你需要重试');
				return;
			}
		});
	}
});
$("#login-btn").click(function(){
    var input = document.getElementsByClassName('input');
    var judge = vail(input);
    if(judge){
        var data = getdata(input);
        $.post('/login', data, function(res) {
            if(res.stautus==1){
                app.alert("登陆成功");
                setTimeout(function(){
                    window.location.href= 'index.html';
                },1000)
            }else{
                app.alert("登陆失败,请重试");
                return;
            }
        });
    }
});
// 验证方法
function vail(dom,location){
    var k = false;
    if(dom.length > 1){
        for(var i = 0;i < dom.length;i++){
            if(!switchDom(dom[i],location)){
                k = false;
                break;
            }else{
                k = true;
            }
        }
    }
    return k;
}
function switchDom(dom,location){
    var a = dom.getAttribute("name"),
        v = dom.value,
        j = false,
        p = location ? document.getElementsByClassName("warm")[0] : dom.parentElement.lastElementChild,
        s = dom.previousElementSibling.innerText || " ";
    switch(a){
        case 'house':
            j = true;   
        break;
        case 'tel':
            var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3-9][0-9]{9}$)/;
            if(reg.test(v)){
                j = true;
                if(p.length>0){
                    p.innerText = '';
                }
            }else{
                j = false;
                if(p.length>0){
                    p.innerText = '手机号码不正确';
                }else{
                    app.alert('手机号码不正确');
                }
            }
        break;
        case 'type':
            if(!v){
                app.alert('类型不能为空，请填写正确');
                j = false;
            }else{
                j = true;
            }
        break;
        case 'passagain':
            var pass = document.getElementsByClassName('password')[0];
            if(v !== pass.value ){
                if(p.length >0){
                    p.innerText = '密码不匹配，请重新输入';
                }else{
                    app.alert('密码不匹配，请重新输入');
                }
                j = false;
                
            }else{
                j = true;
                if(p.length>0){
                    p.innerText = '';
                }
            }
        break;
        default:
            if(v){
                if(p.length>0){
                    p.innerText = '';
                }
                j = true;
            }else{
            	var tt = s.substr(0,s.length-1);
                if(p.length > 0){
                    p.innerText = tt.trim() + '不能为空，请填写正确';
                }else{
                    app.alert(tt.trim() + '不能为空，请填写正确');
                }
                j = false;
            }
        break;
    }
    return j;
}

function getdata(dom){
    var d = dom.length;
    var temp = '';
    for(var i=0;i<d;i++){
        if(dom[i].value){
            var name = dom[i].getAttribute('name');
            if(name=='passagain') continue;
            temp += dom[i].getAttribute('name') + '=' + dom[i].value + '&';
        }
    }
    temp = temp.substr(0,temp.length - 1);
    return temp;
}
