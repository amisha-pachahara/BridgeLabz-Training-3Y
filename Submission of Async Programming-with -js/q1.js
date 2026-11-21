// Q1 – The Startup Morning: Async Coffee Maker

// Each step returns a Promise and takes a random time between 1 and 2 seconds.
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Could not boil water."));
            } else {
                console.log("Water is boiled.");
                resolve();
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Coffee brewing failed."));
            } else {
                console.log("Coffee is brewed.");
                resolve();
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into the cup...");
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Could not pour coffee."));
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, delay);
    });
}

// Promise chaining ensures that each step starts after the previous step succeeds.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee process failed:", error.message);
    });
