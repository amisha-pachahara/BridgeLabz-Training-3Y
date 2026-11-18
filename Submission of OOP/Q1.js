// Q1. Student Result Processing (reduce + Classes)

// Create Student class
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Return grade based on average
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}

// Test with 3 students
let student1 = new Student("Amit", [85, 90, 78]);
let student2 = new Student("Sara", [65, 70, 60]);
let student3 = new Student("Rahul", [30, 35, 25]);

let students = [student1, student2, student3];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("--------------------");
});
