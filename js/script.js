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
