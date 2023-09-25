const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};

const displayData = () => {
    const resultDiv = document.getElementById("result");
    const firstName = document.getElementById("txt-name1").value;
    const firstAge = parseInt(document.getElementById("txt-age1").value);
    const secondName = document.getElementById("txt-name2").value;
    const secondAge = parseInt(document.getElementById("txt-age2").value);
    const thirdName = document.getElementById("txt-name3").value;
    const thirdAge = parseInt(document.getElementById("txt-age3").value);

    if (
        firstName === "" ||
        isNaN(firstAge) ||
        secondName === "" ||
        isNaN(secondAge) ||
        thirdName === "" ||
        isNaN(thirdAge)
    ) {
        resultDiv.textContent = "Not valid. Please enter valid information for Name and Age.";
    } else {
        const people = [
            { name: firstName, age: firstAge },
            { name: secondName, age: secondAge },
            { name: thirdName, age: thirdAge },
        ];

        people.sort((a, b) => b.age - a.age);

        const sortedNames = people.map(person => person.name);

        resultDiv.textContent = "Oldest to youngest: " + sortedNames.join(", ");
    }
};

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-show-data").onclick = displayData;
};

function showExercise(exerciseNumber) {
    if (exerciseNumber === 1) {
        document.getElementById('exercise1Section').style.display = 'block';
        document.getElementById('exercise2Section').style.display = 'none';
    } else if (exerciseNumber === 2) {
        document.getElementById('exercise1Section').style.display = 'none';
        document.getElementById('exercise2Section').style.display = 'block';
    }
}

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
            fill.style.width = `${fillWidth}%`;
            status.textContent = `Funds Raised: $${donationAmount.toFixed(2)}`;
        }
    };

    document.getElementById("updateButton").addEventListener("click", updateThermometer);
    updateThermometer();
});


