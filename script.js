//your JS code here. If required.
function updateTimer() {
    const timer = document.getElementById("timer");

    const now = new Date();
    const date = now.toLocaleDateString();        // e.g., 14/11/2025
    const time = now.toLocaleTimeString();        // e.g., 03:45:10 PM

    timer.textContent = `${date} - ${time}`;
}

// run immediately once
updateTimer();

// update every second
setInterval(updateTimer, 1000);