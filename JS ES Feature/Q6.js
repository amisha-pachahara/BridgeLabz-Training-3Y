"use strict";

const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Part 1: Print the required pyramid pattern

console.log("----- Pyramid Pattern (4 Rows) -----");

const fixedRows = 4;

for (let i = 1; i <= fixedRows; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trimEnd());
}

// Part 2: Replace let with var and observe the output

console.log("\n----- Using var Instead of let -----");

const varRows = 4;

for (var row = 1; row <= varRows; row++) {

    var varPattern = "";

    for (var column = 1; column <= row; column++) {
        varPattern += "* ";
    }

    console.log(varPattern.trimEnd());
}

// Demonstrate var scope
console.log("Value of row after loop:", row);

// Part 3: Take user input (default = 5)

console.log("\n----- Pyramid Using User Input -----");

rl.question("Enter number of rows (default = 5): ", function (input) {

    // Use 5 when the user presses Enter
    const rows = input.trim() === "" ? 5 : Number(input);

    // Validate the input
    if (!Number.isInteger(rows) || rows < 1) {

        console.log("Invalid input! Enter a positive integer.");

    } else {

        // Generate the pyramid
        for (let i = 1; i <= rows; i++) {

            let pattern = "";

            for (let j = 1; j <= i; j++) {
                pattern += "* ";
            }

            console.log(pattern.trimEnd());
        }
    }

    // Close the interface
    rl.close();
});