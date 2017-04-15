window.onload = function(){
    var add = document.getElementsByClassName("add-bank")[0];
    var sub = document.getElementsByClassName("bank-submit")[0];
    var row = document.getElementsByClassName("card-row")[0];
    var adc = document.getElementsByClassName("add-card")[0];
    var h = row.clientHeight;
    sub.onclick = function(){
        var data = $('.add-data-input');
        if(vail(data)){
            var d = getdata(data);
            alert(d+",添加卡的信息，在card.js第11行");
            Array.prototype.forEach.call(data,function(el){
                el.value = '';
            });
            location.reload();
        }
    }
    add.onclick = function(){
        row.style.webkitTransform = 'translate(0,-150%)';
        row.style.transform = 'translate(0,-150%)';
        adc.style.webkitTransform = 'translate(0,-'+ h +'px)';
        adc.style.transform = 'translate(0,-'+ h +'px)';
    };
    $(".del-bank").click(function(){
        var j = confirm('你确定要删除这张银行卡吗？');
        if(j){
            var id = $(this).parents('li').attr("data-id");
            alert("被删除的卡号是"+id+',在card.js第28行');
        }else{
            return;
        }
    })
}