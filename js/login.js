// 获取验证码
$("#getCode").click(function(event) {
	var tel = $("[name=tel]");
	if(!tel.val()){
		alert("请填写好手机号码");
		return;
	}
});
$("#reg").click(function(){
	var input = document.getElementsByClassName('input');
	console.log(vail(input));	
})
// 验证方法
function vail(dom){
    var k = false;
    console.log(dom);
    if(dom.length > 1){
        for(var i = 0;i < dom.length;i++){
            if(!switchDom(dom[i])){
                k = false;
                break;
            }else{
                k = true;
            }
        }
    }
    return k;
}
function switchDom(dom){
    var a = dom.getAttribute("name"),
        v = dom.value,
        j = false,
        p = dom.parentElement.lastElementChild,
        s = dom.previousElementSibling.innerText || " ";
    switch(a){
        case 'house':
            j = true;   
        break;
        case 'tel':
            var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3-9][0-9]{9}$)/;
            if(reg.test(v)){
                j = true;
                p.innerText = '';
            }else{
                j = false;
                p.innerText = '手机号码不正确';
            }
        break;
        case 'name':
        case 'code':
        case 'password':
        case 'meCode':
            if(v){
                p.innerText = '';
                j = true;
            }else{
            	var tt = s.substr(0,s.length-1);
                p.innerText = tt.trim() + '不能为空，请填写正确';
                j = false;
            }
        break;
        case 'passagain':
        	var pass = document.getElementsByClassName('password')[0];
        	if(v !== pass.value ){
        		j = false;
        		p.innerText = '密码不匹配，请重新输入';
        	}else{
        		j = true;
        		p.innerText = '';
        	}
    	break;
    }
    return j;
}