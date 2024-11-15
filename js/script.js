// Funzione per generare 5 numeri casuali
function generateRandomNumbers(count, min, max) {
    let numbers = [];
    while (numbers.length < count) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

// Elementi del DOM
const numbersList = document.getElementById("numbers-list");
const countdownDiv = document.getElementById("countdown");
const answersForm = document.getElementById("answers-form");
const messageParagraph = document.getElementById("message");
const inputGroup = document.getElementById("input-group");

// Generare numeri casuali 
const randomNumbers = generateRandomNumbers(5, 1, 50);
randomNumbers.forEach(number => {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    listItem.classList.add("fs-2", "fw-bold");
    numbersList.appendChild(listItem);
});
