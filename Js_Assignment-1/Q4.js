
 // Marks obtained in five subjects
let marks = [90, 85, 88, 92, 80];

 // Calculate total, average, and percentage
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

 // Check eligibility for promotion
let hasFailed = marks.some(mark => mark < 35);

if (hasFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
