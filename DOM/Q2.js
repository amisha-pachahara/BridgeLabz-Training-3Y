
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxLength = 100;

// Update character counter
textarea.addEventListener("input", function () {

    const remaining = maxLength - textarea.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.classList.remove("warning", "danger");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("danger");
    }
});

// Prevent typing beyond 100 characters
textarea.addEventListener("keydown", function (event) {

    if (textarea.value.length >= maxLength) {

        const allowedKeys = [
            "Backspace", "Delete", "ArrowLeft",
            "ArrowRight", "ArrowUp", "ArrowDown",
            "Tab", "Home", "End"
        ];

        if (!allowedKeys.includes(event.key) &&
            !event.ctrlKey && !event.metaKey) {

            event.preventDefault();
        }
    }
});

// Reset everything
resetBtn.addEventListener("click", function () {

    textarea.value = "";
    counter.textContent = "100 characters remaining";

    counter.classList.remove("warning", "danger");
});
