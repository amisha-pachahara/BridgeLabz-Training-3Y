"use strict";

// Part 1: Original code to demonstrate hoisting

console.log("----- Original Code -----");

console.log(score);

announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}

// Part 2: Corrected code

console.log("\n----- Corrected Code -----");

// Declare variables before using them
let gameScore = 50;
let gameStatus = "ready";

// Function declaration
function displayAnnouncement() {
    console.log("Game started");
}

function displayStatus() {
    console.log(gameStatus);
}

// Execute after initialization
console.log("Score:", gameScore);
displayAnnouncement();
displayStatus();

// Part 3: Arrow functions

console.log("\n----- Arrow Function Version -----");

const arrowScore = 100;
const arrowStatus = "Game Ready";

// Arrow functions
const announceGame = () => {
    console.log("Game started using arrow function");
};

const showGameStatus = () => {
    console.log(arrowStatus);
};

// Call arrow functions after initialization
console.log("Score:", arrowScore);
announceGame();
showGameStatus();