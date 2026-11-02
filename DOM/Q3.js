
const steps = document.querySelectorAll(".step");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const summary = document.getElementById("summary");

let currentStep = 0;

// Show current step
function showStep() {

    steps.forEach(function (step, index) {
        step.classList.toggle("active", index === currentStep);
    });

    backBtn.style.display = currentStep === 0 ? "none" : "inline";

    nextBtn.textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

// Validate current step
function validateStep() {

    const input = steps[currentStep].querySelector("input");

    if (!input.checkValidity() || input.value.trim() === "") {

        input.reportValidity();
        return false;
    }

    if (currentStep === 2 && input.value.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    return true;
}

// Next button
nextBtn.addEventListener("click", function () {

    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {

        currentStep++;
        showStep();

    } else {

        summary.innerHTML = `
            <h3>Registration Summary</h3>
            Name: ${document.getElementById("name").value}<br>
            Email: ${document.getElementById("email").value}<br>
            Password: ${"*".repeat(document.getElementById("password").value.length)}
        `;

        steps.forEach(step => step.style.display = "none");

        nextBtn.style.display = "none";
        backBtn.style.display = "none";
    }
});

// Back button
backBtn.addEventListener("click", function () {

    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();
