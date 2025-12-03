let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}



let saveEl = document.getElementById("save-el");
let counter = document.getElementById("count-el");


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(saveEl);
    counter.textContent = 0;
    count = 0;
}



let errorEl = document.getElementById("error-el");

function errorMessage() {
    errorEl.textContent = "Something went wrong, please try again...";
}


let number1 = 8;
let number2 = 2;
document.getElementById("num1").textContent = number1;
document.getElementById("num2").textContent = number2;

function add() {
    let result = number1 + number2;
    document.getElementById("sum").textContent = result;
    console.log(result);
}

function subtract() {
    let result = number1 - number2;
    document.getElementById("sum").textContent = result;
    console.log(result);
}

function multiply() {
    let result = number1 * number2;
    document.getElementById("sum").textContent = result;
    console.log(result);
}

function divide() {
    let result = number1 / number2;
    document.getElementById("sum").textContent = result;
    console.log(result);
}


let score = document.getElementById("score-el");
let scoreEl = 0; 

function increaseScore1() {
    scoreEl += 1;
    score.textContent = scoreEl;
    console.log(scoreEl);
}

function increaseScore2() {
    scoreEl += 2;
    score.textContent = scoreEl;
    console.log(scoreEl);
}

function increaseScore3() {
    scoreEl += 3;
    score.textContent = scoreEl;
    console.log(scoreEl);
}


let score2 = document.getElementById("score-el2");
let scoreEl2 = 0; 

function increaseScore11() {
    scoreEl2 += 1;
    score2.textContent = scoreEl2;
    console.log(scoreEl2);
}

function increaseScore22() {
    scoreEl2 += 2;
    score2.textContent = scoreEl2;
    console.log(scoreEl2);
}

function increaseScore33() {
    scoreEl2 += 3;
    score2.textContent = scoreEl2;
    console.log(scoreEl2);
}

function resetScoreHome() {
    scoreEl = 0;
    score.textContent = scoreEl;
}

function resetScoreGuest() {
    scoreEl2 = 0;
    score2.textContent = scoreEl2;
}






















