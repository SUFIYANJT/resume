// index.js
// Ensure the DOM is fully loaded before running this code
document.addEventListener("DOMContentLoaded", function() {
    // Select buttons by their IDs
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    // Function to handle vibration
    function vibrateOnClick() {
        if (navigator.vibrate) {
            navigator.vibrate(1000); // Vibrate for 100 milliseconds
        } else {
            alert("Vibration API is not supported on this device.");
        }
    }

    // Add event listeners to buttons
    button1.addEventListener("click", vibrateOnClick);
    button2.addEventListener("click", vibrateOnClick);
    button3.addEventListener("click", vibrateOnClick);
});
