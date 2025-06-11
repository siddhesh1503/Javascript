// Generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId; // Store interval ID globally

const startChangingColor = function () {
    // Prevent multiple intervals stacking
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // Reset to allow restart
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
