$(document).ready( function() {

var comp = 520;

$(".otherBox").hide();

	$("#forWho").change( function() {  

		var fadeSpeed = 500;
		

		if($("#forWho").val()=="other") {
			$(".otherBox").fadeToggle(fadeSpeed);
		}

		else {
			$(".otherBox").hide();
		}

	});

	// When user selects something in the "Who is it for" section, 
	// scroll to next section
	$("#forWho").change( function() { 

		if($('#forWho').val()=="friend") {
			$('html, body').animate({scrollTop:$('#what').position().top + comp}, 'slow');
		}

		else if($('#forWho').val()=="family") {
			$('html, body').animate({scrollTop:$('#what').position().top + comp}, 'slow');
		}

		else if($('#forWho').val()=="myself") {
			$('html, body').animate({scrollTop:$('#what').position().top + comp}, 'slow');
		}
	});

	$("#otherNext").click( function() {

		$('html, body').animate({scrollTop:$('#what').position().top + comp}, 'slow');

	});


	// When user selects something in the "Type of Jewelry" section, 
	// scroll to next section
	$(".jwl").click( function() {

		$('html, body').animate({scrollTop:$('#why').position().top + comp}, 'slow');

	});



	// After user types something in the "Story" section, 
	// scroll to next section
	$("#storyNext").click( function() {

		$('html, body').animate({scrollTop:$('#contact-info').position().top + 500}, 'slow');

	});


});