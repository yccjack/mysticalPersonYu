$("#home").click(function() {
	$.post(
		"index.html",
		"",
		function(data, status) {
			alert("Data: " + data + "\nStatus: " + status);
		});
});

$("#assay1").click(function() {

	$("#loadHtml").remove()
	$("#loadHtml").load("assay1.html", function(response, status, xhr) {
	$('#loadHtml').html(response);
	});
});

$("#AboutMe").hide();

$("#aboutMe").click(function(){
	
	$("#homeHtml").hide(1000,function(){
		$("#AboutMe").fadeIn();
	});
	
});

$("#home").click(function(){
	
	$("#AboutMe").hide(1000,function(){
		$("#homeHtml").fadeIn();
	});
	
});

