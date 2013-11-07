$(document).ready( function() {

	$(window).ready(updateHeight);
	$(window).resize(updateHeight);

	function updateHeight()
	{
	    var div = $('#index-promotion');
	    var width = div.width();
	    
	    div.css('height', width);
	}

});
