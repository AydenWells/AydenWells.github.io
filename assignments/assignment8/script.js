const quotes = [
    "Quote 1:I have 3 dogs named Marley, Finley, and Kenzie",
    "Quote 2:My favorite color is blue.",
    "Quote 3:I'm from Savannah, Georgia.",
    "Quote 4:I live at Yugo Columbia Lofts this year.",
    "Quote 5:I have a pet crested gecko named Greenbean."
];



let quoteIndex = 0;
const quoteElement = document.getElementById("quote");

function changeQuote() {
    quoteElement.innerText = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}
quoteElement.innerText = quotes[quoteIndex];

setInterval(changeQuote, 2000);

    
function drawRainbow() {
    const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const ContainerForRainbow = document.getElementById("Container-For-Rainbow");
    const potofGold = document.getElementById("pot-of-gold");

    function addStripe(index) {
        if (index < rainbowColors.length) {
            setTimeout(() => {
                const stripes = document.createElement("div");
                stripes.className = "stripes";
                stripes.style.backgroundColor = rainbowColors[index];
                ContainerForRainbow.appendChild(stripes);
                addStripe(index + 1);
            }, 200); 
        } else {
            setTimeout(() => {
                potofGold.style.display = "block";
            }, 1000);
        }
    }

    addStripe(0);
}
