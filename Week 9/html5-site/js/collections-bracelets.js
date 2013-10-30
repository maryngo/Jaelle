$(document).ready( function() {

	$(".default-price").click( function() {

		$(".bigmoney").fadeIn(1000);
		$(".price_10").fadeIn(1000);
		$(".price_50").fadeIn(1000);
		$(".price_100").fadeIn(1000);


	});

	// when users click the Under 100 price in the drop down, items priced higher than 100 disappear
	$(".und_100").click( function() {

		$(".price_10").fadeIn(1000);
		$(".price_50").fadeIn(1000);
		$(".price_100").fadeIn(1000);
		$(".bigmoney").fadeOut(1000);

	});

	$(".und_50").click( function() {

		$(".price_10").fadeIn(1000);
		$(".price_50").fadeIn(1000);
		$(".bigmoney").fadeOut(1000);
		$(".price_100").fadeOut(1000);
		
	});

	$(".und_10").click( function() {

		$(".price_10").fadeIn(1000);
		$(".bigmoney").fadeOut(1000);
		$(".price_100").fadeOut(1000);
		$(".price_50").fadeOut(1000);

	});

	
});