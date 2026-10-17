
 // Monthly expenses for five categories
let expenses = [5000, 2000, 10000, 1500, 1000];

 // Calculate the total expenses
let total = 0;

for (let expense of expenses) {
    total += expense;
}

 // Calculate average and add 10% tax
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

 // Display the results
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));
