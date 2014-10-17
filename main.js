$(function(){
	var words = $("p").text().split(" ");
	$("p").empty();
	$.each(words, function(i, v) {
	    $("p").append($("<span count='0'>").text(v + " "));
	});
});

$(function(){
	$('span').hover(
		function() {
			count = parseInt($(this).attr('count'))
			count += 1	
			$(this).attr("count",count)
		}
	)
});

$(function(){
	
}
