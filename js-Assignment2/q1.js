
 // Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Total Salary: " + salary);

    // Changing local variable does not change global bonus
    isPermanent = false;
    console.log("Global Bonus: " + bonus);
}

// Function call
calculateSalary();
