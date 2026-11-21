// Q3 – Bug Tracker: Callback to Promise Migration

// Promise-based replacement for the original callback function.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // A boolean randomly decides whether the API request succeeds.
            const apiSuccess = Math.random() >= 0.2;

            if (apiSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject(new Error("Unable to fetch bugs from the API."));
            }
        }, 1000);
    });
}

// Fetch the bugs and display them in a neat table.
getBugs()
    .then((bugs) => {
        console.log("Bug list:");
        console.table(bugs.map((bug, index) => ({
            "S.No.": index + 1,
            "Bug Description": bug
        })));
    })
    .catch((error) => {
        console.error("Bug Tracker Error:", error.message);
    });
