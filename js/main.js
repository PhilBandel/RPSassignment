$(document).ready(pageReady);

function pageReady() {

var computerChoice;
var userChoice;
var outcome;
var computerWins = 0;
var userWins = 0; 

$(".play-button").click(playGameClick)
function playGameClick(); {
$(".play-button").slideUp();
$(".game-container").slideDown();
computerPlay();
}

// Generates random computer choice
function computerPlay() {
  var randomNum = getRandomInt(0, 2);
  var choices = ["rock", "paper", "scissors"];
  
  computerChoice = choices[randomNum];
}

// Generates random number from range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Demonstration of how to generate random computer choice.
computerPlay();
console.log(computerChoice);