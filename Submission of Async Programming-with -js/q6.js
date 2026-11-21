// Q6 – E-Commerce Dashboard: Product Card Fetcher

const API_URL = "https://fakestoreapi.com/products";

async function fetchAndDisplayProducts() {
    try {
        // fetch() sends an HTTP request and returns a Promise.
        const response = await fetch(API_URL);

        // fetch() does not reject automatically for HTTP error status codes.
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();

        // Display the required product details in the console.
        products.forEach((product) => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("----------------------------------------");
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

// Start fetching the product data.
fetchAndDisplayProducts();
