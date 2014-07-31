
$(document).ready(function(){

	/*---Declare variables---*/
	var guessCount = 0;
	var randomNum;
	var userNum;
	var numDifference;
	var gameOver = false;
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){

    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){

  		$(".overlay").fadeOut(1000);

  	});

  	/*---Random Number Generator Function---*/
  	var generateNumber = function() {

  		randomNum = Math.floor( (Math.random() * 100) + 1 );
  		return randomNum;

  	}

  	/*---Feedback Function---*/
	var sendFeedback = function(feedback) {

  		$('#feedback').text(feedback);

  	}

  	/*---Guess Count Function---*/
  	var guessCounter = function() {

  		$('#count').text(guessCount);

  	}

  	/*---Clear Input Box Function---*/
  	var clearInput = function() {

  		+$('#userGuess').val('');

  	}

  	/*---Focus To Input Box Function---*/
  	var focusInput = function() {

  		$('#userGuess').focus();

  	}

  	/*---+New Game Reset Function---*/
  	$('.new').click(function() {

  		newGame();

  	});

  	/*---New Game Function---*/
  	var newGame = function() {

  		$('#count').text('');
  		$('.guessBox').text('');
  		guessCount = 0;
  		generateNumber();
  		gameOver = false;
  		guessCounter();
  		focusInput();
  		clearInput();
  		sendFeedback('Lets Play Again!!!');

  	}

  	/*---Check Temperature Function---*/
  	var checkTemp = function() {

  		numDifference = Math.abs( randomNum - userNum );

  		if ( numDifference === 0 ) {

  			sendFeedback("Congrats, you've guessed the secret number!");

  			gameOver = true;

  		} else if ( numDifference < 5 ) {

  			sendFeedback("Call the firetruck, you're literally Burning!!!");

  		} else if ( numDifference < 10 ) {

  			sendFeedback("You're about to catch Fire!!!");

  		} else if ( numDifference < 15 ) {

  			sendFeedback("You're playing with Fire!!!");

  		} else if ( numDifference < 20 ) {

  			sendFeedback("You're getting Hot!!!");

  		} else if ( numDifference < 25 ) {

  			sendFeedback("You're getting Warm!!!");

  		} else if ( numDifference < 30 ) {

  			sendFeedback("You're getting Cool!!!");

  		} else if ( numDifference < 40 ) {

  			sendFeedback("You're getting Chilly!!!");

  		} else if ( numDifference < 45 ) {

  			sendFeedback("You're Cold!!!"); 

  		} else if ( numDifference < 50 ) {

  			sendFeedback("You're Ice Cold!!!");

  		} else {

  			sendFeedback("You're gonna need to be Thawed Out!!!");

  		}

  	}

  	/*---Start New Game On Page Load---*/
  	newGame();

  	/*---Generate random number---*/
  	generateNumber();

  	/*---Form Submit---*/
  	$('form').submit(function(event) {

  		event.preventDefault();

  		if ( gameOver === false ) {

  			userNum = +$('#userGuess').val();

  			clearInput();

  			if ( userNum < 0 || userNum > 100 ) {

  				sendFeedback('Please enter a number from 1 to 100!');
  				return false;

  			}	else if ( isNaN(userNum) ) {

  				sendFeedback('You have to enter a numerical vale!');

  			}	else if ( userNum % 1 != 0 ) {

  				sendFeedback('Only whole numbers will work!');

  			} else {

  				event.preventDefault();

  				$('.guessBox').append('<li>' + userNum + '</li>');

  				guessCount ++;

  				guessCounter();

  				checkTemp();

  			}

  		} else {

  			sendFeedback("You have won, start a new game!!!");
  		}

  	});

});


