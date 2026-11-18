// Q4. Employee Inheritance (Method Overriding + Runtime Polymorphism)

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing general employee work.");
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Override parent's work() method
    work() {
        console.log(this.name, "is managing the", this.department, "department.");
    }
}

// Create objects
let employee1 = new Employee("Amit", "IT");
let manager1 = new Manager("Sara", "HR");

// Same method name, different behavior
employee1.work();
manager1.work();
