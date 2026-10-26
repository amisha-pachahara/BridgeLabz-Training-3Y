
"use strict";

// Create FormBuilder class
class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    // Generate form fields dynamically
    buildForm() {
        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach(function(field) {
            formHTML += `
                <label for="${field.name}">${field.label}</label>
            `;

            if (field.type === "select") {
                formHTML += `
                    <select id="${field.name}" name="${field.name}" required>
                `;

                field.options.forEach(function(option) {
                    formHTML += `
                        <option value="${option}">${option}</option>
                    `;
                });

                formHTML += "</select>";
            } else {
                formHTML += `
                    <input
                        type="${field.type}"
                        id="${field.name}"
                        name="${field.name}"
                        placeholder="Enter ${field.label}"
                        required
                    >
                `;
            }
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += "</form>";

        this.container.innerHTML = formHTML;

        const form = document.getElementById("dynamicForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const data = this.getFormData();

            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);

            console.log(data);
        });
    }

    // Return entered values as an object
    getFormData() {
        const form = document.getElementById("dynamicForm");
        const formData = {};

        this.fields.forEach(function(field) {
            formData[field.name] = form.elements[field.name].value;
        });

        return formData;
    }
}

// Define form fields
const fields = [
    {
        type: "text",
        name: "username",
        label: "Username"
    },
    {
        type: "email",
        name: "email",
        label: "Email"
    },
    {
        type: "password",
        name: "password",
        label: "Password"
    },
    {
        type: "select",
        name: "course",
        label: "Course",
        options: ["B.Tech", "BCA", "MCA", "MBA"]
    }
];

// Create FormBuilder object
const formBuilder = new FormBuilder(fields, "formContainer");

// Generate the form
formBuilder.buildForm();
