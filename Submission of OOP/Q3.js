// Q3. Product Discount System (Constructor + Prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method
Product.prototype.applyDiscount = function(percent) {
    let discount = this.price * percent / 100;
    let newPrice = this.price - discount;
    return newPrice;
};

// Create 3 products
let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

// Apply different discounts
console.log(product1.name, "Price after discount:", product1.applyDiscount(10));
console.log(product2.name, "Price after discount:", product2.applyDiscount(20));
console.log(product3.name, "Price after discount:", product3.applyDiscount(15));

// Abstraction: users call applyDiscount() without needing to know
// the internal discount calculation.
