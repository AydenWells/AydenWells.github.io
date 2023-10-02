document.addEventListener("DOMContentLoaded", () => {
    const donationAmountInput = document.getElementById("donationAmount");
    const fill = document.getElementById("fill");
    const status = document.getElementById("status");

    const updateThermometer = () => {
        const donationAmount = parseFloat(donationAmountInput.value);
        const goalAmount = 10000;

        if (isNaN(donationAmount)) {
            status.textContent = "Please enter a valid donation amount.";
        } else if (donationAmount >= goalAmount) {
            status.textContent = "Goal reached!";
        } else {
            const fillWidth = (donationAmount / goalAmount) * 100;
            status.textContent = `Funds Raised: $${donationAmount.toFixed(2)}`;

            // Set the CSS variable to control the fill width gradually
            fill.style.setProperty("--fill-width", `${fillWidth}%`);
        }
    };

    document.getElementById("updateButton").addEventListener("click", updateThermometer);
    updateThermometer();
});

const manImage = document.getElementById("man-image");
let isRunning = false;

function toggleImage() {
    if (isRunning) {
        manImage.src = 'walking.png';
        isRunning = false;
    } else {
        manImage.src = 'running.png';
        isRunning = true;
    }

    const containerWidth = document.getElementById('man-container').offsetWidth;
    const currentLeft = parseFloat(getComputedStyle(manImage).getPropertyValue('--man-left')) || 0;
    const newLeft = currentLeft + containerWidth * 0.1;

}

setInterval(toggleImage, 200);

toggleImage();




