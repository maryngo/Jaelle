$(document).ready(function() {

	$(".eventHover a").click(function(thumb) {

		// thumb.preventDefault();

		//remove the highlight on previous selected item
		$(".select").removeClass("selected");
		
		//place the highlight on the selected the current item
		$(".select", this).addClass("selected");

	});


	
});