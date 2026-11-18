// Q2. Online Food Ordering (map + Error Handling)

let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // map() gets the prices of ordered items
    let prices = orderItems.map(item => {
        let food = menu.find(menuItem => menuItem.name === item);

        // Throw error if item is not available
        if (!food) {
            throw new Error(item + " is not available in the menu.");
        }

        return food.price;
    });

    // reduce() calculates total bill
    let total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}

// Valid order
try {
    let order = ["Pizza", "Burger", "Pasta"];
    console.log("Total Bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid order
try {
    let order = ["Pizza", "Sushi"];
    console.log("Total Bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Error:", error.message);
}
