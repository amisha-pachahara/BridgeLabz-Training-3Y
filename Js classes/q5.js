
"use strict";

const bookingForm = document.getElementById("bookingForm");

// Validate a text field
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

// Handle booking form submission
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

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

    const seatsInput = document.getElementById("seats");
    const seatsError = document.getElementById("seatsError");
    const seatsValue = seatsInput.value.trim();
    const seats = Number(seatsValue);

    let seatsValid = false;

    if (
        seatsValue !== "" &&
        Number.isInteger(seats) &&
        seats >= 1 &&
        seats <= 10
    ) {
        seatsInput.classList.add("valid");
        seatsInput.classList.remove("invalid");
        seatsError.textContent = "";
        seatsValid = true;
    } else {
        seatsInput.classList.add("invalid");
        seatsInput.classList.remove("valid");
        seatsError.textContent = "Enter a number of seats between 1 and 10.";
    }

    const ticketDetails = document.getElementById("ticketDetails");
    ticketDetails.replaceChildren();

    if (nameValid && emailValid && seatsValid) {
        // Store booking information in an object
        const booking = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            seats: seats
        };

        // Display ticket details
        const heading = document.createElement("h3");
        heading.textContent = "Booking Successful!";

        const namePara = document.createElement("p");
        namePara.textContent = "Name: " + booking.name;

        const emailPara = document.createElement("p");
        emailPara.textContent = "Email: " + booking.email;

        const seatsPara = document.createElement("p");
        seatsPara.textContent = "Seats: " + booking.seats;

        ticketDetails.append(
            heading,
            namePara,
            emailPara,
            seatsPara
        );

        console.log("Booking Details:", booking);
    }
});
