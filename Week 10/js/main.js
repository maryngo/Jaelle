$(document).ready( function() {


	//cache nav  
	var nav = $("#topNav");  
                  
	//add indicators and hovers to submenu parents  
	nav.find("li").each(function() {

		if ($(this).find("ul").length > 0) {  
                  
			$("<span>").text(" ").appendTo($(this).children(":first"));  

			//show subnav on hover  
			$(this).mouseenter(function() {  
				$(this).find("ul").stop(true, true).slideDown();  
			});  
                          
			//hide submenus on exit  
			$(this).mouseleave(function() {  
				$(this).find("ul").stop(true, true).slideUp();  
			});  
		}

	});  





	// Code for Pop-up search
	$(".searchBox").hide();

	$(".search-button").click( function() {

		$(".searchBox").fadeToggle(500);
		$(".cartBox").hide();

	});

	// Code for Pop-up cart
	$(".cartBox").hide();

	$(".cart-button").click( function() {

		$(".cartBox").fadeToggle(500);
		$(".searchBox").hide();

	});





	// Code for nav
	if ($(window).width() > 600) {
		
		$(".primary").show();
		$(".secondary").hide();

		$(".drop").mouseenter( function() {

			$(".secondary").show();

		});

		$(".drop").mouseleave( function() {

			$(".secondary").hide();
		});
	}

	else if ($(window).width() <= 600) {

		$("#nav-icon").click( function() {

			$(".primary").fadeToggle(500);
			$(".secondary").fadeToggle(500);

		});
	}



	$(window).resize(function(){
		if ($(window).width() > 600){

		$(".primary").show();
		$(".secondary").hide();

		$(".drop").mouseenter( function() {

			$(".secondary").show();

		});

		$(".drop").mouseleave( function() {

			$(".secondary").hide();
		});
	}
	});
	

	$(window).resize(function(){
		if ($(window).width() <= 600){	

		$(".primary").hide();
		$(".secondary").hide();

		$("#nav-icon").click( function() {

			$(".primary").fadeToggle(500);
			$(".secondary").fadeToggle(500);

		});
			
		}
	});
	
});