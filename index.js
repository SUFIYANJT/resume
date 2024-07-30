
function vibrateOnClick() {
    var button1=document.getElementById("button1");
    if (navigator.vibrate) {
        navigator.vibrate(10000); // Vibrate for 100 milliseconds
        button1.innerHTML="viberated"
    }
    else{
        button1.innerHTML="not viberated"
    }
}