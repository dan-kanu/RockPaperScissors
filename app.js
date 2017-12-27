var userName = prompt("What is your name");
var userWeapon;
var count=0;
var pcChoice;
var userScore = 0;
var pcScore = 0;
var result;
var pLog = [];  //Array to keep track of the Results
var userRock =0;    //Keeps count of How many times the User select rock
var userPaper =0;     //Keeps count of How many times the User select rock
var userScissors =0;    //Keeps count of How many times the User select rock

document.getElementById('player').innerHTML=userName;
$(document).ready(function(){
  // IF ROCK is clicked, rock gets display on the main-stage
    $("#rock").click(function(){
        $("#weapon-select").css("background-image", "url(rock-256.png)");
        userRock ++;
        userWeapon = "rock";
      $("#pc-select").css("background-image", "none");
    });

    $("#paper").click(function(){
        $("#weapon-select").css("background-image", "url(paper-256.png)");
        userPaper ++;
        userWeapon = "paper";
        $("#pc-select").css("background-image", "none");
    });

    $("#scissors").click(function(){
        $("#weapon-select").css("background-image", "url(scissors-3-256.png)");
        userScissors ++;
        userWeapon = "scissors";
        $("#pc-select").css("background-image", "none");
    });

// Function to trigger action from Bot
function shoot(userChoice){
  count ++; // Increaments the game count
  pcChoice = Math.random(); //Generates random number

  if (pcChoice < 0.33) {
    pcChoice = "rock";
      $("#pc-select").css("background-image", "url(rock-256.png)")
  }else if (pcChoice < 0.66) {
    pcChoice = "paper";
    $("#pc-select").css("background-image", "url(paper-256.png)");
  }else{
    $("#pc-select").css("background-image", "url(scissors-3-256.png)");
    pcChoice = "scissors";
  }

// Function to compare User Choice and Bot Choice and Determine the Results
  function compare(choice1, choice2){
    if(choice1 === choice2){
      result = "Draw";
    }else if(choice1 === "paper" && choice2 === "rock" ||
     choice1 === "rock" && choice2 ==="scissors" ||
    choice1 === "scissors" && choice2 ==="paper" ){
      result = userName + " Wins!";
      userScore ++;

    }else{
      result = "Bot Wins";
      pcScore++;
    }
  }

  // Call the compare function and pass userChoice and pcChoice as arguments.
  compare(userChoice, pcChoice);

// Calculates the Percentage of the user selected Weapons and Prints it out to the screen
  document.getElementById('rock-percentatge').innerHTML = Math.floor(userRock/count * 100);
  document.getElementById('paper-percentatge').innerHTML = Math.floor(userPaper/count * 100);
  document.getElementById('scissors-percentatge').innerHTML = Math.floor(userScissors/count * 100);

// Prints out info to the screen
  document.getElementById('result').innerHTML = result; // Prints out result
  document.getElementById('game-count').innerHTML = count; // prints out the Game count
  document.getElementById('bot-point').innerHTML = pcScore; // Prints out the BOT SCORE
  document.getElementById('user-point').innerHTML = userScore; // Prints out User Point
}

// Calls the Shoot fuction and passing the Rock as an arguments
document.getElementById('rock').addEventListener("click", function(){
  shoot("rock");
});

document.getElementById('paper').addEventListener("click", function(){
  shoot("paper");
});

document.getElementById('scissors').addEventListener("click", function(){
  shoot("scissors");
});


});
