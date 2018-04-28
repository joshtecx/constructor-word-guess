const inquirer = require("inquirer");
const word = require("./word.js");



// I had all of the following written out already until I realized that I was doing
// the assignment the wrong way. I put them here to potentially use after I get word.js
// figured out. 


// =========================================================
// Variables
// =========================================================

// words array
const wordArray = ["coffee", "computer", "hat", "table"];

// Answer variables
let answer = "";
let answerLetters;
let answerDisplay = [];
let joinedDisplay;

// Wins/Losses
let guessesLeft = 10;
let wins = 0;
let losses = 0;
let winCounter = 0;

// =========================================================
// functions
// =========================================================

const getAnswer = function() {
    answer = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(answer);
};

const userGuess = function(guess){
    // answerLetters = answer.split(""); 
    // console.log(answerLetters);
    if(answer.indexOf(guess) > -1){
        for(let j = 0; j < answer.length; j++){
            if(answer[j] === guess){
                answerDisplay[j] = guess;
                winCounter++;
                // console.log(answerDisplay);
            }
        }
        joinedDisplay = answerDisplay.join(" ");
        console.log(joinedDisplay);
    } else {
        guessesLeft--;
        console.log("Remaining Guesses: " + guessesLeft);
    }

    if(winCounter === answer.length){
        console.log("You got it!");
        wins++;
    } else if(guessesLeft === 0){
        console.log("Dang! Better luck next time!");
        losses++;
    }
}