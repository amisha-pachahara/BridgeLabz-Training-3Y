
"use strict";

// Create Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to the product
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Keyboard", 1500, "Accessories"),
    new Product(4, "Headphones", 2000, "Electronics"),
    new Product(5, "Notebook", 100, "Stationery")
];

// Apply a 10% discount to the laptop
products[0].applyDiscount(10);

// Display all products
console.log("All Products:");

products.forEach(function(product) {
    console.log(product.displayDetails());
});

// Filter products with price greater than 1000
const filteredProducts = products.filter(function(product) {
    return product.price > 1000;
});

console.log("Products with price greater than ₹1000:");

filteredProducts.forEach(function(product) {
    console.log(product.displayDetails());
});
