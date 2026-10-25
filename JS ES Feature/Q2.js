"use strict";

// Employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Process each employee
for (const employee of employees) {

    try {
        // Validate required properties
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee property");
        }

        // Convert strings into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate numeric data
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or years");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        // Calculate total salary
        const totalSalary = salary + bonus;

        // Display employee details
        console.log(`\nEmployee Name: ${employee.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Years of Experience: ${years}`);
        console.log(`Bonus: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}