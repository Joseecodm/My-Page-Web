// Wait for the page to fully load
window.addEventListener("load", () => {
    // After a small delay, hide the loading screen and show the content
    setTimeout(() => {
        // Hide the loading screen
        document.getElementById("loading").style.opacity = "0"; // Make it invisible
        document.getElementById("loading").style.visibility = "hidden"; // Makes it invisible without removing it

        // Show the main content
        document.getElementById("main-content").style.display = "block"; // Display content
    }, 2000); // 2 seconds to show the loading screen
});
