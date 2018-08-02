
var player1score = 0
var player2score = 0

$('#startbtn').click( function () {
	$('#rules').hide('');
});


$('#playerbtn1').click ( function () {
	var x = Math.floor((Math.random() * 3) + 1);
	

	if( x == 1) {
		$('#wheel').css('background', 'url(assets/img/stop.gif)');
		$('#wheel').html('You stopped!!!');

	}
	else if (x == 2) {
		$('#wheel').css('background', 'url(assets/img/turbo.gif)');
		$('#wheel').html('You are on Turbo!!!');
		player1score += 2;
	}
	else {
		$('#wheel').css('background', 'url(assets/img/accelerate.gif)');
		$('#wheel').html("You are Accelerating!!");
		player1score += 1;

	}	

	$('#player1res').val(player1score);	
	if (player1score >= 5) {
		$('#win1').css("display", "block");
		$('#wheel').hide('');
	}
});


$('#playerbtn2').click ( function () {
	var x = Math.floor((Math.random() * 3) + 1);
	

	if( x == 1) {
		$('#wheel').css('background', 'url(assets/img/stop.gif)');
		$('#wheel').html('You stopped!!!');

	}
	else if (x == 2) {
		$('#wheel').css('background', 'url(assets/img/turbo.gif)');
		$('#wheel').html('You are on Turbo!!!');
		player2score += 2;
	}
	else {
		$('#wheel').css('background', 'url(assets/img/accelerate.gif)');
		$('#wheel').html("You are Accelerating!!");
		player2score += 1;

	}	

	$('#player2res').val(player2score);	
	if (player2score >= 5) {
		$('#win2').css("display", "block");
		$('#wheel').hide('');
	}

});



