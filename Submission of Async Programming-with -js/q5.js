// Q5 – Frontend Rush: Avoiding Callback Hell

// -------------------- Version 1: Nested callbacks --------------------

// Each callback stage waits one second before starting the next stage.
function runCallbackPipeline() {
    console.log("Callback pipeline started.");

    setTimeout(() => {
        console.log("Design completed.");

        setTimeout(() => {
            console.log("Build completed.");

            setTimeout(() => {
                console.log("Test completed.");

                setTimeout(() => {
                    console.log("Deploy completed.");

                    setTimeout(() => {
                        console.log("Celebrate! Callback pipeline finished.");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// -------------------- Version 2: async/await --------------------

// A reusable Promise-based stage that takes one second.
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${stageName} completed.`);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Async/await pipeline started.");

    // await pauses this function until the current stage is complete.
    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Async/await pipeline finished!");
}

// Run the two versions one after another for clear output.
async function main() {
    runCallbackPipeline();

    // The callback version takes about five seconds.
    // Wait for it to finish before starting the async/await version.
    await new Promise((resolve) => setTimeout(resolve, 5100));

    await runAsyncPipeline();
}

main().catch((error) => {
    console.error("Pipeline error:", error.message);
});

/*
Why async/await improves readability:
1. It makes asynchronous code look similar to normal step-by-step code.
2. It avoids deeply nested callbacks (callback hell).
3. Error handling can be done clearly with try/catch.
4. It is easier to read, debug, and maintain.
*/
