(function() {
    'use strict';

    function padZero(num) {
        return num.toString().padStart(2, '0');
    }

    function updateClock() {
        const clockElement = document.getElementById('clock');
        if (!clockElement) return;

        const now = new Date();
        const hours = padZero(now.getHours());
        const minutes = padZero(now.getMinutes());
        const seconds = padZero(now.getSeconds());

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Initialize clock immediately and then update every second
    updateClock();
    setInterval(updateClock, 1000);

})();

