// Q1: Real-Time Live Search using jQuery AJAX
// JSON Server: json-server --watch q1-db.json --port 3001
// Open q1.html in a browser (or use VS Code Live Server).

$(document).ready(function () {
    let searchTimer;

    $("#searchInput").on("input", function () {
        const searchValue = $(this).val().trim();

        clearTimeout(searchTimer);
        $("#searchResults").empty();

        if (searchValue === "") {
            $("#loading").hide();
            return;
        }

        // Small debounce prevents sending a request for every keystroke immediately.
        searchTimer = setTimeout(function () {
            $("#loading").show();

            $.ajax({
                url: "http://localhost:3001/products",
                method: "GET",
                data: { q: searchValue },
                dataType: "json",
                success: function (products) {
                    $("#searchResults").empty();

                    if (products.length === 0) {
                        $("#searchResults").text("No products found");
                        return;
                    }

                    products.forEach(function (product) {
                        const item = $("<div>").addClass("product");
                        $("<img>")
                            .attr({ src: product.image, alt: product.name })
                            .appendTo(item);
                        $("<h3>").text(product.name).appendTo(item);
                        $("<p>").text("Price: ₹" + product.price).appendTo(item);
                        $("#searchResults").append(item);
                    });
                },
                error: function () {
                    $("#searchResults").text("Unable to load products. Please try again.");
                },
                complete: function () {
                    $("#loading").hide();
                }
            });
        }, 250);
    });
});
