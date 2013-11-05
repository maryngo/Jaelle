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

	// Parallax
	var $window = $(window); 
	var velocity = 0.4; 

	function update(){ 

		var pos = $window.scrollTop(); 
		
		$('.bg-container').each(function() { 
			var $element = $(this); 
			var height = $element.height(); 

			$(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
		}); 
	}; 

	$window.bind('scroll', update);


	
});