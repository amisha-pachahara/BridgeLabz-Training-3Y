
"use strict";

const form = document.getElementById("studentForm");

// Validate a field using a regular expression
function validateField(id, pattern, message) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    const value = input.value.trim();

    if (pattern.test(value)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        error.textContent = "";
        return true;
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        error.textContent = message;
        return false;
    }
}

// Validate the form when submitted
form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("success").textContent = "";

    const nameValid = validateField(
        "name",
        /^[A-Za-z]+$/,
        "Name must contain alphabets only."
    );

    const emailValid = validateField(
        "email",
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Enter a valid email address."
    );

    const phoneValid = validateField(
        "phone",
        /^\d{10}$/,
        "Phone number must contain exactly 10 digits."
    );

    const passwordValid = validateField(
        "password",
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/,
        "Password must contain an uppercase letter, a number and a special character."
    );

    if (nameValid && emailValid && phoneValid && passwordValid) {
        document.getElementById("success").textContent =
            "Registration successful!";

        console.log("Student registered successfully.");

        form.reset();

        document.querySelectorAll("input").forEach(function(input) {
            input.classList.remove("valid", "invalid");
        });
    }
});
