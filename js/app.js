$(document).ready(function($) {
	var distance = $('.distance option:selected').text();
	console.log(distance);
	/*$('.hotslogan').on('click', 'h3', function(){
		weather();
	}) */

	$('.sunimage, .sunButton').on('click', function(){
		
		distance = $(this).closest('.sun').find('.distance option:selected').text();
		weather(distance);
		$(this).closest('.sun').closest('#main').fadeOut();
		$(this).closest('.sun').closest('#main').closest('.container').find('#results').fadeIn();
	})


	$('.dropdown-menu').on('click', 'a', function(){
		distance = "25mi";
		//distance = $(this).closest('.sun').find('.distance option:selected').text();
		//weather(distance);
		$('#main').hide();
		$(this).closest('li').closest('.dropdown-menu').closest('.btn-group').closest('#main').closest('.container').find('#results').show();
	})



}); 




var weather = function(distance) {

   var result = $.ajax({
	    //url: "http://api.aerisapi.com/observations/within?p=san+francisco,ca&radius=25miles&limit=5&sort=temp:-1&client_id=DuhRCmbo361kP72sAgSPt&client_secret=diKzMvdY9kP3WtappP65gd8fKXcIE1Umlo2cPlRz",
	   url: "http://api.aerisapi.com/observations/within?p=san+francisco,ca&radius="+distance+"&limit=5&sort=temp:-1&client_id=DuhRCmbo361kP72sAgSPt&client_secret=diKzMvdY9kP3WtappP65gd8fKXcIE1Umlo2cPlRz",
	    dataType: "jsonp",
	    success: function(result) {
	        if (result.success == true) {
	            //var ob = json.response.ob;
	            //$('body').html('The current weather in Seattle is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');
	            console.log(JSON.stringify(result));
		        /*console.log("City: " + result.response[0].place.name);
		        console.log(result.response[0].ob.tempF + '°');
		        console.log(result.response[0].relativeTo.distanceMI + "mi"); */
		        for(i=0; i<6; i++) {
	         	
		         	var counter = i + 1;
		         	$('.name' + counter).text(result.response[i].place.name);
		         	//$('.name' + counter).text(result.response[2].name);
		         	$('.dist' + counter).text(parseInt(result.response[i].relativeTo.distanceMI) + " mi");
		         	$('.temp' + counter).text(result.response[i].ob.tempF + '°'); 
        		} 
	        }
	        else {
	           alert('An error occurred: ' + result.error.description);
	        }
     	}
    });


}