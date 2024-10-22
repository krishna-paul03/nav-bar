function openNav() {
    document.getElementById("mySidebar").style.width = "250px"; // Set the width of the sidebar
    document.getElementById("main").style.marginLeft = "250px"; // Adjust the main content
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"; // Set the width of the sidebar to 0
    document.getElementById("main").style.marginLeft = "0"; // Reset the main content margin
}