(function()
{
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseoverHeight = $('#mouse-over').height(); //keeps the height constant instead of growing
	
	$('#mouse-over').mouseover(function()
	{
		$(this).html('Scrooge McDuck!');
		$(this).height($mouseoverHeight + 50);
	});
	
	$('#click').click(function() 
	{
		$(this).html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$('#submit').submit(function(e) {
		e.preventDefault();
		if($(this).find('input[type="text"]').val() !== '') 
		{
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).ready(function() 
	{
		document.getElementById("change").style.visibility = "hidden";
		document.getElementById("keep").style.visibility = "hidden";
		var x = document.cookie;
		if(x)
		{
			var s = x.split(";")
			document.getElementById("info").innerHTML = "COOKIE: " + s[0];
		}
		setTimeout(function()
		{
			$("#timeout").fadeOut('slow');
		}, 1000);
	});
	
	var requested = "";
	var dataGotten = false;
	var currentData = "";
	
	$("#BUTTON").click(function()
	{
		document.getElementById("change").style.visibility = "visible";
		document.getElementById("keep").style.visibility = "visible";
		document.getElementById("BUTTON").style.visibility = "hidden";
		
		 $.post( "http://www.mattbowytz.com/simple_api.json?data=quizData", function( data ) {
		  requested = data.data;
		  changeData();
		});
		
	});
	
	$("#change").click(function()
	{
		changeData();
	});
	
	$("#keep").click(function()
	{
		document.cookie = currentData + ";expires=Thu, 31 Dec 2017 12:00:00 UTC";
	});
	
	function changeData()
	{
		rando = Math.floor((Math.random() * requested.length));
		document.getElementById("info").innerHTML = requested[rando];
		currentData = requested[rando];
	}

})();