
 // Generate 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Calculate highest and lowest scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Calculate average using reduce()
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Count students who passed using filter()
let passedStudents = scores.filter(score => score >= 50).length;

// Display each score using map()
let scoreList = scores.map((score, index) =>
    `Student ${index + 1}: ${score}`
).join("\n");

// Display summary
console.log(`
Array Performance Analyzer
--------------------------
${scoreList}

Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed: ${passedStudents}
`);
