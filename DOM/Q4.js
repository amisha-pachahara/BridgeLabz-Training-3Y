
// Function to change theme
function changeTheme(theme) {

    // Remove previous theme and apply new theme
    document.body.setAttribute("class", theme);

    // Save theme in custom attribute
    document.body.setAttribute("data-theme", theme);

    console.log("Current Theme:", theme);
}
