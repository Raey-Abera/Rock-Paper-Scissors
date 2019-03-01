//Once either human or bot wins the scoreboard needs to update


var botScore=0;
var playerScore=0; //add variable playerScore
var playersWeapon= ""; //identified playersWeapon, assigned empty string
var botsWeapon= "";
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("spock").onclick=playerThrowsSpock;
document.getElementById("lizard").onclick=playerThrowsLizard;

function playerThrowsRock(){
    playersWeapon="rock";
    botsWeapon=getRandomWeapon();//getRandomWeapon();
    checkWhoWon(botsWeapon, playersWeapon);//running the function, running values through to conduct the comparison
}
function playerThrowsScissors(){
    playersWeapon="scissors";
    botsWeapon=getRandomWeapon();//getRandomWeapon (); this is a
    checkWhoWon(botsWeapon, playersWeapon);//function call

}
function playerThrowsPaper(){
    playersWeapon="paper";
    botsWeapon=getRandomWeapon();//getRandomWeapon();
    checkWhoWon(botsWeapon, playersWeapon);

}
function playerThrowsSpock(){
	playersWeapon="scissors";
  botsWeapon=getRandomWeapon()
	checkWhoWon(botsWeapon,playersWeapon);
	// displayPlayedMessage("You played Spock. Computer played "+botsWeapon+".")
}
function playerThrowsLizard(){
	playersWeapon="paper";
  botsWeapon=getRandomWeapon()
	checkWhoWon(botsWeapon,playersWeapon);
	// displayPlayedMessage("You played Lizard. Computer played "+botsWeapon+".")
}


function getRandomWeapon(){
    var randomNumber=Math.random();
    // var botsWeapon="rock";
    if(randomNumber<.20){
        botsWeapon="scissors";
    }
    else if(randomNumber<.4366){
        botsWeapon="paper";
    }
    else if(randomNumber<.6333){
        botsWeapon="spock";
    }
    else if(random<.8000){
      botsWeapon="lizard";
    }
    return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
    if(botsWeapon===playersWeapon){
        displayCompleteMessage("There was tie!");
    }
    else if(
      (botsWeapon=="scissors" && playersWeapon=="paper") ||
      (botsWeapon=="scissors" && playersWeapon=="lizard") ||
      (botsWeapon=="paper" && playersWeapon=="rock") ||
      (botsWeapon=="paper" && playersWeapon=="spock") ||
      (botsWeapon=="rock" && playersWeapon=="scissors")||
      (botsWeapon=="rock" && playersWeapon=="lizard")||
      (botsWeapon=="spock" && playersWeapon=="scissors") ||
      (botsWeapon=="spock" && playersWeapon=="rock") ||
      (botsWeapon=="lizard" && playersWeapon=="paper")||
      (botsWeapon=="lizard" && playersWeapon=="spock")
      ){
        increaseBotScore();
    }
    else{
        increasePlayerScore();
    }
}
function increaseBotScore(){
    botScore+=1;
    document.getElementById("computerScore").innerHTML=botScore;
    displayCompleteMessage("Sorry, you're a loser");//functon call
}
function increasePlayerScore(){
    playerScore+=1;
    document.getElementById("humanScore").innerHTML=playerScore;
    displayCompleteMessage("congrats, you're a winner");

}
function displayCompleteMessage(msg){ //displaying function call
    document.getElementById("status").innerHTML=msg;
}
