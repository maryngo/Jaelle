$(document).ready( function() {


	$("#price").change( function() {  

		var fadeSpeed = 500;

		// var priceSort = $("#price").val();
		// $("h1").html(priceSort);

		if($('#price').val()=="10") {
			$(".price_10").fadeIn(fadeSpeed);
			$(".price_50").fadeOut(fadeSpeed);
			$(".price_100").fadeOut(fadeSpeed);
			$(".bigmoney").fadeOut(fadeSpeed);
		}

		else if($('#price').val()=="50") {
			$(".price_10").fadeIn(fadeSpeed);
			$(".price_50").fadeIn(fadeSpeed);
			$(".price_100").fadeOut(fadeSpeed);
			$(".bigmoney").fadeOut(fadeSpeed);
		}

		else if($('#price').val()=="100") {
			$(".price_10").fadeIn(fadeSpeed);
			$(".price_50").fadeIn(fadeSpeed);
			$(".price_100").fadeIn(fadeSpeed);
			$(".bigmoney").fadeOut(fadeSpeed);
		}

		else {
			$(".bigmoney").fadeIn(fadeSpeed);
			$(".price_10").fadeIn(fadeSpeed);
			$(".price_50").fadeIn(fadeSpeed);
			$(".price_100").fadeIn(fadeSpeed);
		}

	});
	
});