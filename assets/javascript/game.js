//counters
var wins = 0;
var losses = 0;

var currentScore=0;

//crystals randomly chooses 1-12
var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);

//selects a random number between 19-120
var crystalTotal = Math.floor((Math.random()* 120) + 19);


// var updatecurrentScore = function (){
// 	$('.currentScore').empty();
// 	$('.currentScore').append(currentScore);
// 	$('#wins').empty();
// 	$('#wins').append(wins);
// 	$('#losses').empty();
// 	$('#losses').append(losses);



// //restart from beginning
// var restart = function(){
// 	currentScore = 0;
//     crystalTotal = Math.floor((Math.random()* 120) + 19);

// 	$('.crystalTotal').empty();
// 	$('.crystalTotal').append(total);

// 	red = Math.floor((Math.random()* 12) + 1);
//     blue = Math.floor((Math.random()* 12) + 1);
//     yellow = Math.floor((Math.random()* 12) + 1);
//     green = Math.floor((Math.random()* 12) + 1);
//     //alert('restart');
//     updatecurrentScore();

// }
// var logic = function (){
// 	if (currentScore == crystalTotal ) {
// 		wins = wins + 1;
	
// 		restart();
// 	}else if(currentScore > crystalTotal){
// 		losses = losses + 1;
    
// 		restart();
// 	}else{
// 		updatecurrentScore();
// 	}
// }
// $('.crystalTotal').append(crystalTotal);

// $('.currentScore').append(currentScore);


 $(document).ready(function(){

 	//Set win and loss to zero, manipulate html

 	$('#scorediv').text(0);
 	$('#win-count').text(0);
 	$('#loss-count').text(0);
 	$("#guessnumberid").text(crystalTotal);


 	function reset()
 	{
 			//pick other random numbers
   blue = Math.floor((Math.random()* 12) + 1);
   green = Math.floor((Math.random()* 12) + 1);
   yellow = Math.floor((Math.random()* 12) + 1);
   red = Math.floor((Math.random()* 12) + 1);
   crystalTotal = Math.floor((Math.random()* 120) + 19);
   currentScore = 0;

	$('#scorediv').text(currentScore);
 	$("#guessnumberid").text(crystalTotal);

 	}

 	function updateScoreInHTML()
 	{

$('#scorediv').text(currentScore);
 	}


 	function checkWithCrystalTotal()
 	{
 		if(currentScore > crystalTotal)
 		{
			alert("You Lose!")
			// //       losses++
			// //       $("#losses").html(losses);
 			losses++;	
 			$('#loss-count').text(losses);
 			reset();
 		}

 		if(currentScore == crystalTotal)
 		{
			alert("You Win!");
			// //       wins++
			// //       $("#wins").html(wins);
			// //       // The game restarts whenever the player wins.
			// //       startGame();
 			wins++;	
 			$('#win-count').text(wins);
 				reset();
 		}

 	}

	$('#blue').on("click", function(){
		currentScore = currentScore + blue;
		updateScoreInHTML();
		checkWithCrystalTotal();
	});

	$('#green').on("click", function(){
		currentScore = currentScore + green;
		updateScoreInHTML();
		checkWithCrystalTotal();
	});

	$('#red').on("click", function(){
		currentScore = currentScore + red;
		updateScoreInHTML();
		checkWithCrystalTotal();
	});

	$('#yellow').on("click", function(){
		currentScore = currentScore + yellow;
		updateScoreInHTML();
		checkWithCrystalTotal();
	});



// 	$('#green').click(function(){
// 		currentScore = currentScore + blue;
// 		logic();
// 	})
// 	$('#yellow').click(function(){
// 		currentScore = currentScore + yellow;
// 		logic();
// 	})
// 	$('#red').click(function(){
// 		currentScore = currentScore + green;
// 		logic();
// 	})
// });

// // function checkWl() {
// //     if (currentScore == crystalTotal) {
// //       alert("You Win!");
// //       wins++
// //       $("#wins").html(wins);
// //       // The game restarts whenever the player wins.
// //       startGame();
// //     }
// //     // The player loses if their score goes above the random number.
// //     if (currentScore > crystalTotal) {
// //       alert("You Lose!")
// //       losses++
// //       $("#losses").html(losses);
// //       // The game restarts whenever the player loses.
// //       startGame();
// //     }
// //   };
});