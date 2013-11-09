$(document).ready(function() {
	$('.header').hover( function() {
		$(this).find('#instructions').toggle();
		$('#logo').toggleClass('hidden');
	});
});

var randomnumber = Math.floor(Math.random()*100);
var oldDistance = 1000;

function checkLength(one,two) {
	var distance = Math.abs(one - two);
	var result;
	if (distance === 0) {
		result = 'You got it!';
	} else if (distance > oldDistance) {
		result ='Getting colder!';
	} else {
		result = 'Getting warmer!';
	}
	oldDistance = distance;
	return result
}

$('#submit').click(function() {
	var userinput = $('input').val();
	var userNum = parseInt(userinput);
	var value = validate(userNum);
	if (value == true) {
	var hint = checkLength(userNum, randomnumber);
	}
	$('#textinput').text(hint);

	});

	function validate(userinput) {
		if(userinput == '') {
		alert('Please enter a value!');
	} else if (isNaN(userinput)) {
		alert('Please enter a number!');
	} else if (userinput > 100 || userinput < 1) {
		alert('Enter a value between 1 and 100.');
	} else
		return true
};

$('#newgame').click(function() {
	randomnumber = Math.floor(Math.random()*100);
});

