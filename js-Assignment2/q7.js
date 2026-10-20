
 
 // Customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase
let lowerFeedback = feedback.toLowerCase();

// Count words
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Check for negative words
let hasBad = lowerFeedback.includes("bad");
let hasPoor = lowerFeedback.includes("poor");

// Display feedback analysis
console.log("Customer Feedback: " + feedback);
console.log("Word Count: " + wordCount);

// Classify feedback
if (!hasBad && !hasPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
