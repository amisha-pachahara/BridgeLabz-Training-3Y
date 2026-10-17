
 // Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

 // Test value for the user's guess
let userGuess = 25;

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

 // Check the guess using nested conditions
if (userGuess >= 1 && userGuess <= 50) {
    if (userGuess === secretNumber) {
        console.log("Correct guess!");
    } else if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
} else {
    console.log("Please enter a number between 1 and 50.");
}
