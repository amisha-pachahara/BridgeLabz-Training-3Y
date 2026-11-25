// Q2: Employee Status Dashboard using XMLHttpRequest + PATCH
// JSON Server: json-server --watch q2-db.json --port 3002
// Open q2.html in a browser (or use VS Code Live Server).

const employeeList = document.getElementById("employeeList");
const employeeMessage = document.getElementById("message");
const employeesUrl = "http://localhost:3002/employees";

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", employeesUrl);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const employees = JSON.parse(xhr.responseText);
            employeeList.innerHTML = "";

            employees.forEach(function (employee) {
                const row = document.createElement("div");
                row.className = "employee-row";
                row.dataset.id = employee.id;

                const name = document.createElement("span");
                name.textContent = employee.name;

                const status = document.createElement("span");
                status.className = "status";
                status.textContent = employee.status;

                const toggle = document.createElement("button");
                toggle.textContent = employee.status === "active" ? "Deactivate" : "Activate";
                toggle.addEventListener("click", function () {
                    toggleEmployee(employee, status, toggle);
                });

                row.append(name, status, toggle);
                employeeList.appendChild(row);
            });
        } else {
            employeeMessage.textContent = "Could not load employees.";
        }
    };

    xhr.onerror = function () {
        employeeMessage.textContent = "Network error while loading employees.";
    };

    xhr.send();
}

function toggleEmployee(employee, statusElement, button) {
    const oldStatus = employee.status;
    const newStatus = oldStatus === "active" ? "inactive" : "active";

    // Optimistically update the UI before the server responds.
    employee.status = newStatus;
    statusElement.textContent = newStatus;
    button.textContent = newStatus === "active" ? "Deactivate" : "Activate";
    employeeMessage.textContent = "";

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", employeesUrl + "/" + employee.id);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status < 200 || xhr.status >= 300) {
            revertStatus();
            employeeMessage.textContent = "Update failed. Status has been restored.";
        }
    };

    xhr.onerror = function () {
        revertStatus();
        employeeMessage.textContent = "Network error. Status has been restored.";
    };

    xhr.send(JSON.stringify({ status: newStatus }));

    function revertStatus() {
        employee.status = oldStatus;
        statusElement.textContent = oldStatus;
        button.textContent = oldStatus === "active" ? "Deactivate" : "Activate";
    }
}

loadEmployees();
