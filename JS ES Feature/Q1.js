"use strict";

// Mixed API data
const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined
];

// Arrays to store valid and invalid numeric values
const validNumbers = [];
const invalidNumbers = [];

// Loop through each API value
for (let i = 0; i < apiData.length; i++) {

    const value = apiData[i];

    // Convert value into Number, Boolean and String
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nOriginal Value: ${stringValue}`);
    console.log(`Number Form: ${numberValue}`);
    console.log(`Boolean Form: ${booleanValue}`);
    console.log(`String Form: "${stringValue}"`);

    // Skip NaN, whitespace-only strings and strings with invalid characters
    const isInvalid =
        (typeof value === "string" &&
            (value.trim() === "" ||
             value.trim() === "NaN" ||
             !Number.isFinite(numberValue))) ||
        (typeof value === "number" && !Number.isFinite(value));

    if (isInvalid) {
        invalidNumbers.push(value);
        console.log("Status: Invalid numeric data");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid numeric data");
    }
}

// Print final report
console.log("\n========== FINAL REPORT ==========");

console.log("Valid Numeric Values:", validNumbers);
console.log("Invalid Values:", invalidNumbers);

console.log("Total Valid Values:", validNumbers.length);
console.log("Total Invalid Values:", invalidNumbers.length);