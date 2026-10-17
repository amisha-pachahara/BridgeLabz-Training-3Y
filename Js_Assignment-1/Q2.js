
let username = "Amisha";
let age = 21;
let isStudent = true;
let subjects = ["JavaScript", "Python", "Java"];
let user = { name: "Amisha", city: "Mathura" };
let address = null;
let phoneNumber;


console.table([
    { Label: "User Name", Value: username, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: String(address), Type: address === null ? "null" : typeof address },
    { Label: "Phone Number", Value: String(phoneNumber), Type: typeof phoneNumber }
]);
