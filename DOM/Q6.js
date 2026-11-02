
const searchInput = document.getElementById("search");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

// Filter table on input
searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    const rows = studentTable.querySelectorAll("tr");

    let found = false;

    rows.forEach(function (row) {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";
            found = true;

        } else {

            row.style.display = "none";
        }
    });

    // Show message if no matching rows
    noResults.style.display = found ? "none" : "block";
});
