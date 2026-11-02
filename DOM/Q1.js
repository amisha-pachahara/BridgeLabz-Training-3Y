
// Select elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Add new product
addBtn.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="productName">${productName}</span>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    productList.appendChild(li);

    productInput.value = "";
});

// Event Delegation for Edit and Delete
productList.addEventListener("click", function (event) {

    const li = event.target.closest("li");

    if (!li) return;

    // Delete product
    if (event.target.classList.contains("deleteBtn")) {
        li.remove();
    }

    // Edit product
    if (event.target.classList.contains("editBtn")) {

        const span = li.querySelector(".productName");

        if (li.querySelector("input")) return;

        const input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);
        input.focus();

        // Auto-save when clicking outside
        document.addEventListener("click", function saveEdit(e) {

            if (!li.contains(e.target)) {

                const newSpan = document.createElement("span");
                newSpan.className = "productName";
                newSpan.textContent = input.value.trim() || "Unnamed Product";

                input.replaceWith(newSpan);

                document.removeEventListener("click", saveEdit);
            }
        });
    }
});
