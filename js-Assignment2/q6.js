
 // Initialize counter
let count = 0;

// Function to increment count
function increment() {
    count++;
    console.log("Count: " + count);
}

// Function to decrement count
function decrement() {
    count--;
    console.log("Count: " + count);
}

// Nested function to demonstrate scope
function counterDemo() {
    function showCount() {
        console.log("Current Count: " + count);
    }

    showCount();
}

// Simulate click events
increment();
increment();
decrement();

// Call nested function
counterDemo();
