var userName = prompt("What is your name");
var userWeapon;
var count=0;
var pcChoice;
var userScore = 0;
var pcScore = 0;
var result;

document.getElementById('player').innerHTML=userName;
$(document).ready(function(){
  // IF ROCK is clicked, rock gets display on the main-stage
    $("#rock").click(function(){
        $("#weapon-select").css("background-image", "url(rock-256.png)");

        userWeapon = "rock";
      $("#pc-select").css("background-image", "none");

    });

    $("#paper").click(function(){
        $("#weapon-select").css("background-image", "url(paper-256.png)");
        userWeapon = "paper";
        $("#pc-select").css("background-image", "none");

    });

    $("#scissors").click(function(){
        $("#weapon-select").css("background-image", "url(scissors-3-256.png)");
        userWeapon = "scissors";
        $("#pc-select").css("background-image", "none");

    });

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

  compare(userChoice, pcChoice);
  document.getElementById('result').innerHTML = result;
  document.getElementById('game-count').innerHTML = count;
  document.getElementById('bot-point').innerHTML = count;
  document.getElementById('user-point').innerHTML = userScore;
}


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
