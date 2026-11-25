// Q3: Interactive FAQ
$(document).ready(function () {
    // Clicking a question toggles only its own answer.
    $(".question").on("click", function () {
        $(this).next(".answer").stop(true, true).slideToggle();
    });

    // Hover effects make the question currently under the pointer stand out.
    $(".question").hover(
        function () { $(this).css("color", "#1769aa"); },
        function () { $(this).css("color", ""); }
    );

    // Double-clicking any question collapses every answer.
    $(".question").on("dblclick", function () {
        $(".answer").stop(true, true).slideUp();
    });

    // Focus on an input highlights its parent FAQ question.
    $(".answer input").on("focus", function () {
        $(this).closest(".faq-item").find(".question").css("background-color", "#fff2cc");
    });

    // When the input loses focus, restore the question's normal background.
    $(".answer input").on("blur", function () {
        $(this).closest(".faq-item").find(".question").css("background-color", "");
    });
});
