
 // Given number
let x = 16.75;

// Mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary using template literals
console.log(`
Math Utility Dashboard
----------------------
Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${cube}
Random Number (10-50): ${randomNumber}
`);
