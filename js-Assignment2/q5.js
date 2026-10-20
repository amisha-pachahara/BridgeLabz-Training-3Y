
 // Security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Change values and test another outcome
isWindowClosed = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Demonstrate OR and NOT operators
console.log("Any Security Condition Missing:",
    !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside
);
