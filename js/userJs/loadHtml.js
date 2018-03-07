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
$("#homeHtml").hide();
var homeHtml = $("#homeHtml").html();
$("#AboutMe").hide();
$("#changeHtml").html(homeHtml);

function homeFunc() {
	var homeHtml = $("#homeHtml").html();
	$("#AboutMe").hide();
	$("#changeHtml").hide();
	$("#changeHtml").html(homeHtml);
	$("#changeHtml").fadeIn(500);

}

function aboutMeFunc() {

	var aboutMe = $("#AboutMe").html();
	$("#homeHtml").hide();
	$("#changeHtml").hide();
	$("#changeHtml").html(aboutMe)
	$("#changeHtml").fadeIn(500);
}

$("#aboutMe").click(function() {
	aboutMeFunc();
});

$("#home").click(function() {
	homeFunc();
});

$("#aboutMeMin").click(function() {
	aboutMeFunc();
})