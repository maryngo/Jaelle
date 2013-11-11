$(document).ready(function() {

	$("#one").show();

	$(".img1").click( function() {
		$("#one").show();
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		$("default").hide();
	});

	$(".img2").click( function() {
		$("#two").show();
		$("default").hide();
		$("#one").hide();
		$("#three").hide();
		$("#four").hide();
	});

	$(".img3").click( function() {
		$("#three").show();
		$("default").hide();
		$("#one").hide();
		$("#two").hide();
		$("#four").hide();
	});

	$(".img4").click( function() {
		$("#four").show();
		$("default").hide();
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
	});

	$(".eventHover a").click(function(thumb) {

		thumb.preventDefault();

		//remove the highlight on previous selected item
		$(".select").removeClass("selected");
		
		//place the highlight on the selected the current item
		$(".select", this).addClass("selected");

	});


	
});