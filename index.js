// index.js
function vibrateOnClick() {
    if (navigator.vibrate) {
        navigator.vibrate(100); // Vibrate for 100 milliseconds
    } else {
        console.log("Vibration API is not supported on this device.");
    }
}
