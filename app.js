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
		$("#weapon-select").css("background-image", "url(Rock.png)");
		userRock++;
		userWeapon = "rock";

	});
	$("#paper").click(function() {
		$("#weapon-select").css("background-image", "url(paper.png)");
		userPaper++;
		userWeapon = "paper";

	});
	$("#scissors").click(function() {
		$("#weapon-select").css("background-image", "url(scissors_left.png)");
		userScissors++;
		userWeapon = "scissors";

	});
	
	
	// Function to trigger action from Bot


	function shoot(userChoice) {
		count++; // Increaments the game count
		pcChoice = Math.random(); //Generates random number
		if (pcChoice < 0.33) {
			pcChoice = "rock";
      botRock++;
			$("#pc-select").css("background-image", "url(Rock_right.png)")
		} else if (pcChoice < 0.66) {
			pcChoice = "paper";
      botPaper++;
			$("#pc-select").css("background-image", "url(paper_right.png)");
		} else {
			$("#pc-select").css("background-image", "url(scissors_right.png)");
			pcChoice = "scissors";
      botScissors++;
		}
		// Function to compare User Choice and Bot Choice and Determine the Results
		function compare(choice1, choice2) {
			if (choice1 === choice2) {
				result = "Draw";
				pLog.push("Game" + count + ":  " + result + "<br>");
			} else if (choice1 === "paper" && choice2 === "rock" || choice1 === "rock" && choice2 === "scissors" || choice1 === "scissors" && choice2 === "paper") {
				result = userName + " Wins!";
				userScore++;
				pLog.push("Game" + count + ":  " + result + "<br>");
			} else {
				result = "Bot Wins";
				pcScore++;
				pLog.push("Game" + count + ":  " + result + "<br>");
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
		

		// Function for sound 


	

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
		document.getElementById('logs').innerHTML = pLog + "<br>"; /// Logs
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
