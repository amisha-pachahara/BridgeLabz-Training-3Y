// Parent constructor
function Person(name) {
    this.name = name;
}

// Student constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Restoring constructor reference
Student.prototype.constructor = Student;

// Method to display name
Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

// Method to display branch
Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

// Creating student object
const student1 = new Student("Amisha", "CSE");

// Calling methods
student1.showName();
student1.showBranch();