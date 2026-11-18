// Q6. E-Commerce Inventory System (Array Methods)

let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 10 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1200, stock: 4 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 8 },
    { id: 5, name: "Book", category: "Education", price: 400, stock: 2 },
    { id: 6, name: "Notebook", category: "Education", price: 100, stock: 15 }
];

// 1. Low stock products using filter()
function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

// 2. Sort products by price using sort()
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value using reduce()
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category using reduce()
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

// Test functions
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("\nProducts Sorted by Price:");
console.log(sortProductsByPrice());

console.log("\nTotal Inventory Value:");
console.log("Rs.", calculateTotalInventoryValue());

console.log("\nProducts Grouped by Category:");
console.log(groupByCategory());
