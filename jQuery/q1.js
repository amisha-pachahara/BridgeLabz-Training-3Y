// Q1: Welcome Page Greeting
$(document).ready(function () {
    // Choose a greeting according to the visitor's local time.
    const hour = new Date().getHours();
    let greetingText;

    if (hour < 12) {
        greetingText = "Good Morning! Have a wonderful day.";
    } else if (hour < 17) {
        greetingText = "Good Afternoon! Keep up the great work.";
    } else {
        greetingText = "Good Evening! Relax and enjoy your time.";
    }

    $("#greeting").text(greetingText);

    // Replace the time-based greeting with a motivational quote.
    $("#changeGreeting").on("click", function () {
        const quotes = [
            "Believe in yourself and keep moving forward!",
            "Every small step brings you closer to success.",
            "Your hard work today builds your future.",
            "Dream big, start small, and act now.",
            "Do your best and make today count!"
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        $("#greeting").text(quotes[randomIndex]);
    });

    // Toggle the welcome message without removing it from the page.
    $("#toggleWelcome").on("click", function () {
        $("#welcomeMessage").toggle();

        const isVisible = $("#welcomeMessage").is(":visible");
        $(this).text(isVisible ? "Hide Welcome Message" : "Show Welcome Message");
    });

    // Clicking the greeting displays an alert.
    $("#greeting").on("click", function () {
        alert("Thanks for visiting our website!");
    });
});
