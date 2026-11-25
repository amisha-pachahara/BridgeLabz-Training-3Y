// Q4: Multi-API Dashboard using Fetch + Promise.all
// JSON Server: json-server --watch q4-db.json --port 3004
// Open q4.html in a browser (or use VS Code Live Server).

const totalUsers = document.getElementById("totalUsers");
const totalOrders = document.getElementById("totalOrders");
const totalProducts = document.getElementById("totalProducts");
const dashboardMessage = document.getElementById("dashboardMessage");

// Display skeleton placeholders while all three requests are in progress.
[totalUsers, totalOrders, totalProducts].forEach(function (element) {
    element.textContent = "Loading...";
});

Promise.all([
    fetch("http://localhost:3004/users"),
    fetch("http://localhost:3004/orders"),
    fetch("http://localhost:3004/products")
])
    .then(function (responses) {
        // fetch() does not reject automatically for HTTP error status codes.
        responses.forEach(function (response) {
            if (!response.ok) {
                throw new Error("An API request failed.");
            }
        });

        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    })
    .then(function (data) {
        const [users, orders, products] = data;
        totalUsers.textContent = users.length;
        totalOrders.textContent = orders.length;
        totalProducts.textContent = products.length;
        dashboardMessage.textContent = "";
    })
    .catch(function () {
        totalUsers.textContent = "—";
        totalOrders.textContent = "—";
        totalProducts.textContent = "—";
        dashboardMessage.textContent = "Some data could not be loaded.";
    });
