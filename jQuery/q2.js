// Q2: Product Highlight
$(document).ready(function () {
    // Clicking a product highlights it and removes the highlight from other products.
    $(".product").on("click", function () {
        $(".product").removeClass("selected");
        $(this).addClass("selected");

        // data-stock is read from the product's HTML data attribute.
        if ($(this).data("stock") === "out") {
            alert("Sorry, this product is currently out of stock.");
        }
    });

    // Hovering over a product reveals its extra details.
    $(".product").hover(
        function () {
            $(this).find(".details").stop(true, true).slideDown(150);
        },
        function () {
            $(this).find(".details").stop(true, true).slideUp(150);
        }
    );

    // Stop the product click handler when the favorite button is clicked,
    // then toggle the selected class on that favorite button only.
    $(".favorite").on("click", function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
        $(this).text($(this).hasClass("selected") ? "♥" : "♡");
    });
});
