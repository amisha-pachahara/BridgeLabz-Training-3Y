// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout() schedules its callback as a macrotask (task queue).
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Promise.then() schedules its callback as a microtask.
Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

// This is synchronous code, so it runs immediately.
console.log("Synchronous log");

console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Explanation:
// JavaScript completes all synchronous code first. After the current
// call stack becomes empty, it processes the microtask queue (including
// Promise.then callbacks) before taking the next macrotask (setTimeout).
