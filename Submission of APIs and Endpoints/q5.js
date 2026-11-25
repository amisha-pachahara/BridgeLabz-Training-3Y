// Q5: College Timetable Viewer using Fetch + Dynamic Rendering
// JSON Server: json-server --watch q5-db.json --port 3005
// Open q5.html in a browser (or use VS Code Live Server).

const daySelect = document.getElementById("daySelect");
const timetableList = document.getElementById("timetableList");
const timetableMessage = document.getElementById("timetableMessage");

async function loadTimetable(day) {
    timetableList.innerHTML = "";
    timetableMessage.textContent = "Loading timetable...";

    try {
        const response = await fetch(
            "http://localhost:3005/timetable?day=" + encodeURIComponent(day)
        );

        if (!response.ok) {
            throw new Error("Unable to fetch timetable.");
        }

        const classes = await response.json();
        timetableMessage.textContent = "";

        if (classes.length === 0) {
            timetableMessage.textContent = "No classes today.";
            return;
        }

        classes.forEach(function (classItem) {
            const row = document.createElement("li");
            row.textContent = classItem.subject + " | " +
                classItem.faculty + " | " + classItem.time;
            timetableList.appendChild(row);
        });
    } catch (error) {
        timetableMessage.textContent = "Could not load timetable. Please try again.";
    }
}

daySelect.addEventListener("change", function () {
    loadTimetable(this.value);
});

// Load Monday timetable when the page opens.
loadTimetable(daySelect.value);
