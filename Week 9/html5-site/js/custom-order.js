$(document).ready( function() {


	$("#forWho").change( function() {  

		var fadeSpeed = 500;
		$(".otherBox").hide();

		if($("#forWho").val()=="other") {
			$(".otherBox").fadeToggle(fadeSpeed);
		}

		else {
			$(".otherBox").hide();
		}

	});

});