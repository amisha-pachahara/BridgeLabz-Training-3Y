"use strict";

// Transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store results
const validTransactions = [];
const invalidTransactions = [];

// Validate each transaction
for (const transaction of transactions) {

    try {
        // Check for null entries
        if (transaction === null) {
            const error = new Error("Null transaction entry");
            error.type = "NULL_ENTRY";
            throw error;
        }

        // Check for missing ID
        if (transaction.id === undefined) {
            const error = new Error("Transaction ID is missing");
            error.type = "MISSING_ID";
            throw error;
        }

        // Check for missing amount
        if (transaction.amount === undefined) {
            const error = new Error("Transaction amount is missing");
            error.type = "MISSING_AMOUNT";
            throw error;
        }

        // Check for negative amount
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative");
            error.type = "NEGATIVE_AMOUNT";
            throw error;
        }

        // If all validations pass
        validTransactions.push(transaction);

        console.log(`Valid transaction: ID ${transaction.id}`);

    } catch (error) {

        // Store invalid transaction and its error category
        invalidTransactions.push({
            transaction: transaction,
            category: error.type,
            message: error.message
        });

        console.log(`Invalid transaction: ${error.message}`);
    }
}

// Final report
console.log("\n========== TRANSACTION REPORT ==========");

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

console.log(`Total Transactions: ${transactions.length}`);
console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions: ${invalidTransactions.length}`);

// Display error categories
console.log("\n========== ERROR CATEGORIES ==========");

for (const item of invalidTransactions) {
    console.log(`${item.category}: ${item.message}`);
}