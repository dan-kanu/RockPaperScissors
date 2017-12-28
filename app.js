var userName = prompt("What is your name");
var userWeapon;
var count = 0;
var pcChoice;
var userScore = 0;
var pcScore = 0;
var result;

var userRockPercentatge;
var userPaperPercentatge;
var userScissorsPercentatge;

var botRockPercentatge;
var botPaperPercentatge;
var botScissorsPercentatge;

var pLog = []; //Array to keep track of the Results
var userRock = 0; //Keeps count of How many times the User select rock
var userPaper = 0; //Keeps count of How many times the User select paper
var userScissors = 0; //Keeps count of How many times the User select scissoer
var botRock = 0; //Keeps count of How many times the Bot select rock
var botPaper = 0; //Keeps count of How many times the Bot select paper
var botScissors = 0; //Keeps count of How many times the Bot select scissors

// prompt User for User Name to Use throughout the site
document.getElementById('player').innerHTML = userName;
$(document).ready(function() {
	// IF ROCK is clicked, rock gets display on the main-stage
	$("#rock").click(function() {
		$("#weapon-select").css("background-image", "url(rock-256.png)");
		userRock++;
		userWeapon = "rock";
		$("#pc-select").css("background-image", "none");
	});
	$("#paper").click(function() {
		$("#weapon-select").css("background-image", "url(paper-256.png)");
		userPaper++;
		userWeapon = "paper";
		$("#pc-select").css("background-image", "none");
	});
	$("#scissors").click(function() {
		$("#weapon-select").css("background-image", "url(scissors-3-256.png)");
		userScissors++;
		userWeapon = "scissors";
		$("#pc-select").css("background-image", "none");
	});
	// Function to trigger action from Bot
	function shoot(userChoice) {
		count++; // Increaments the game count
		pcChoice = Math.random(); //Generates random number
		if (pcChoice < 0.33) {
			pcChoice = "rock";
      botRock++;
			$("#pc-select").css("background-image", "url(rock-256.png)")
		} else if (pcChoice < 0.66) {
			pcChoice = "paper";
      botPaper++;
			$("#pc-select").css("background-image", "url(paper-256.png)");
		} else {
			$("#pc-select").css("background-image", "url(scissors-3-256.png)");
			pcChoice = "scissors";
      botScissors++;
		}
		// Function to compare User Choice and Bot Choice and Determine the Results
		function compare(choice1, choice2) {
			if (choice1 === choice2) {
				result = "Draw";
			} else if (choice1 === "paper" && choice2 === "rock" || choice1 === "rock" && choice2 === "scissors" || choice1 === "scissors" && choice2 === "paper") {
				result = userName + " Wins!";
				userScore++;
			} else {
				result = "Bot Wins";
				pcScore++;
			}

		}
    //fucntion for percentage

    function percent(number){
      return Math.floor(number / count * 100)
    }


    //fucntion for percentage progress bar
    function percentProgress(id, percentageAmount, color){
      document.getElementById(id).style.width = percentageAmount + "%";
      document.getElementById(id).style.backgroundColor = color;
    }

    percentProgress("rock-percentatge-gauge", percent(userRock), "#F900CA");
    percentProgress("paper-percentatge-gauge", percent(userPaper), "#11EBB5");
    percentProgress("scissors-percentatge-gauge", percent(userScissors), "#5DE0F6");
    percentProgress("bot-rock-percentatge-gauge", percent(botRock), "#F900CA");
    percentProgress("bot-paper-percentatge-gauge", percent(botPaper), "#11EBB5");
    percentProgress("bot-scissors-percentatge-gauge", percent(botScissors), "#5DE0F6");
		// Call the compare function and pass userChoice and pcChoice as arguments.
		compare(userChoice, pcChoice);
		// Calculates the Percentage of the user selected Weapons and Prints it out to the screen

    userRockPercentatge = percent(userRock);
    userPaperPercentatge = percent(userPaper);
    userScissorsPercentatge = percent(userScissors);




		document.getElementById('rock-percentatge').innerHTML = userRockPercentatge;
		document.getElementById('paper-percentatge').innerHTML = userPaperPercentatge;
		document.getElementById('scissors-percentatge').innerHTML = userScissorsPercentatge;

    document.getElementById('bot-rock-percentatge').innerHTML = percent(botRock);
		document.getElementById('bot-paper-percentatge').innerHTML = percent(botPaper);
		document.getElementById('bot-scissors-percentatge').innerHTML = percent(botScissors);

		// Prints out info to the screen
		document.getElementById('result').innerHTML = result; // Prints out result
		document.getElementById('game-count').innerHTML = count; // prints out the Game count
		document.getElementById('bot-point').innerHTML = pcScore; // Prints out the BOT SCORE
		document.getElementById('user-point').innerHTML = userScore; // Prints out User Point
	}
	// Calls the Shoot fuction and passing the Rock as an arguments
	document.getElementById('rock').addEventListener("click", function() {
		shoot("rock");
	});
	document.getElementById('paper').addEventListener("click", function() {
		shoot("paper");
	});
	document.getElementById('scissors').addEventListener("click", function() {
		shoot("scissors");
	});
});
