// Q4 – DevOps Delay: Async Timeout Race

// Creates a Promise representing one deployment server.
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        console.log(`${serverName} deployment started...`);

        setTimeout(() => {
            // Randomly simulate a server failure.
            if (Math.random() < 0.15) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                console.log(`${serverName} deployment completed.`);
                resolve(`${serverName} responded`);
            }
        }, delay);
    });
}

// Create both promises once so Promise.all() and Promise.race()
// observe the same two concurrent server operations.
const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all() resolves only when both servers succeed.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Deployment error (Promise.all):", error.message);
    });

// Promise.race() settles as soon as the first server settles.
Promise.race([serverA, serverB])
    .then((firstResponse) => {
        console.log("Fastest response:", firstResponse);
    })
    .catch((error) => {
        console.error("Fastest response error:", error.message);
    });
