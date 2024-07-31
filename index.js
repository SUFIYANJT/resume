// Ensure the function is correctly defined
function vibrateOnClick() {
    if (navigator.vibrate) {
        navigator.vibrate(1000); // Vibrate for 100 milliseconds
    } else {
        alert("Vibration API is not supported on this device.");
    }
}

// Optional: Add event listeners programmatically
document.querySelectorAll('.button1').forEach(button => {
    button.addEventListener('click', vibrateOnClick);
});
document.getElementById('.b1').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=gCj0FkbUosA'; // Change to the URL of the page you want to navigate to
});