$(document).ready(function($) {
	var distance = $('.distance option:selected').text();
	console.log(distance);

	$('.sun').on('click', ".sunimage", function(){
		distance = $(this).closest('.sun').find('.distance option:selected').text();
		weather(distance);
		$(this).closest('#main').fadeOut();
		$(this).closest('#main').closest('.container').find('#results').fadeIn();
		$('#footer').show();
	})
}); 


var weather = function(distance) {


    var request = {
    	radius: distance,
    	limit: "5",
    	sort: "temp:-1",
    	client_id: "DuhRCmbo361kP72sAgSPt",
    	client_secret: "diKzMvdY9kP3WtappP65gd8fKXcIE1Umlo2cPlRz"
    }

   var result = $.ajax({
   		url: "http://api.aerisapi.com/observations/within?p=san+francisco,ca",
	    data: request,
	    dataType: "jsonp",
	    success: function(result) {
	        if (result.success == true) {
	            console.log(JSON.stringify(result));
		        
		        for(i=0; i<6; i++) {
		         	var counter = i + 1;
		         	$('.name' + counter).text(result.response[i].place.name);
		         	//$('.name' + counter).text(result.response[2].name);
		         	$('.dist' + counter).text(parseInt(result.response[i].relativeTo.distanceMI) + " mi");
		         	$('.temp' + counter).text(result.response[i].ob.tempF + '°'); 
        		} 	
	           alert('An error occurred: ' + result.error.description);
	        }
     	}
    });

}