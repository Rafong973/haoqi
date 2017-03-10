(function(){
	
		$.get('/js/location.json',function(res){
			var province = res;
			for(var i=0;i<province.length;i++){
				var dom = "<a href=javascript:void(0) data-id="+ province[i].id +">"+province[i].name +"</a>";
				$(".location-province").append(dom);
			}
			$(".location-province").delegate('a', 'click', function() {
				$(".location-city").html("");
				var index = $(this).index();
				var city = province[index].cities;
				for(var i=0;i<city.length;i++){
					var dom = "<a href=javascript:void(0) data-id="+ i +">"+ city[i].name +"</a>";
					$(".location-city").append(dom);
				}
				setId(0,$(this));
				tabTransiton(1);
			});
			$(".location-city").delegate('a', 'click', function() {
				$(".location-town").html("");
				var i = $(this).index();
				var p = $(".tab-province").attr("data-index");
				var town = province[p].cities[i].cities;
				for(var i=0;i<town.length;i++){
					var dom = "<a href=javascript:void(0) data-id="+ i +">"+ town[i].name +"</a>";
					$(".location-town").append(dom);
				}
				setId(1,$(this));
				tabTransiton(2);
			});
			$(".location-town").delegate('a', 'click', function() {
				var i = $(this).index();
				setId(2,$(this));
				var location = getdata();
			});
		});
})();
$(".tab-flex").click(function() {
	var i = $(this).index();
	$(".location-city").html("");
	$(".location-town").html("");
	if($(".location-content div").eq(i).find("a").length < 1) return;
	tabTransiton(i);
});
function tabTransiton(index){
	var w = $(window).width();
	$(".location-content").css({
		'-webkit-transform' : 'translate3d('+ '-' + w*index+ 'px' +', 0 ,0)',
		'transform'         : 'translate3d('+ '-'+ w*index + 'px' +', 0 ,0)'
	});
	$(".tab-flex").removeClass('active');
	$(".tab-flex").eq(index).addClass('active');
}
function setId(index,dom){
	$(".tab-flex").eq(index).text(dom.text())
		.attr("data-id",dom.attr("data-id"))
		.attr("data-index",dom.index());
}

function getdata(){
	var l = $(".tab-flex");
	var name = "";
	for(var i=0;i<l.length;i++){
		if(l.eq(i-1).text() == l.eq(i).text()) continue;
		name += l.eq(i).text();
	}
	return name;
}