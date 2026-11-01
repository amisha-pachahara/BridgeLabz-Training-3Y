
function makeMultiplier(multiplier) {

    
    return function (number) {

        
        return number * multiplier;
    };
}

// Creating multiplier functions
const triple = makeMultiplier(3);
const double = makeMultiplier(2);

// Calling functions
console.log("Triple:", triple(5));
console.log("Double:", double(5));