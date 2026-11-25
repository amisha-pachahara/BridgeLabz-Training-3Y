// Q3: Task Manager with Filters using jQuery AJAX + Query Parameters
// JSON Server: json-server --watch q3-db.json --port 3003
// Open q3.html in a browser (or use VS Code Live Server).

$(document).ready(function () {
    const tasksUrl = "http://localhost:3003/tasks";

    function loadTasks() {
        const filter = $("#taskFilter").val();
        const params = {};

        if (filter === "Low" || filter === "Medium" || filter === "High") {
            params.priority = filter;
        } else if (filter === "Completed") {
            params.completed = true;
        }

        $("#taskMessage").text("Loading tasks...");

        $.ajax({
            url: tasksUrl,
            method: "GET",
            data: params,
            dataType: "json",
            success: function (tasks) {
                $("#taskList").empty();
                $("#taskMessage").text("");

                if (tasks.length === 0) {
                    $("#taskMessage").text("No tasks found.");
                    return;
                }

                tasks.forEach(function (task) {
                    const item = $("<li>");
                    const checkbox = $("<input>", {
                        type: "checkbox",
                        checked: task.completed
                    });

                    checkbox.on("change", function () {
                        updateTask(task, this.checked);
                    });

                    const title = $("<span>")
                        .text(" " + task.title + " (" + task.priority + ")")
                        .css("text-decoration", task.completed ? "line-through" : "none");

                    checkbox.on("change", function () {
                        title.css("text-decoration", this.checked ? "line-through" : "none");
                    });

                    item.append(checkbox, title);
                    $("#taskList").append(item);
                });
            },
            error: function () {
                $("#taskMessage").text("Unable to load tasks.");
            }
        });
    }

    function updateTask(task, completed) {
        $.ajax({
            url: tasksUrl + "/" + task.id,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: completed }),
            success: function () {
                task.completed = completed;
            },
            error: function () {
                alert("Could not update task. Please refresh and try again.");
                loadTasks();
            }
        });
    }

    $("#taskFilter").on("change", loadTasks);
    loadTasks();
});
