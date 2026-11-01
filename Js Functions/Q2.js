// Function that applies an operation to each number
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Array of numbers
const numbers = [1, 2, 3, 4];

// Function to double numbers
function double(number) {
    return number * 2;
}

// Function to square numbers
function square(number) {
    return number * number;
}

// Applying double operation
const doubledNumbers = applyOperation(numbers, double);
console.log("Doubled Numbers:", doubledNumbers);

// Applying square operation
const squaredNumbers = applyOperation(numbers, square);
console.log("Squared Numbers:", squaredNumbers);