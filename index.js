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





let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0; 
let messageEl = document.getElementById( "sum-el" );
let sumEl = document.getElementById( "sum1" );
let cardEl = document.getElementById( "card" );
let isStart = true; 
let player = {  
    name:"Intrepid",
    points: 120
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": £" + player.points;

console.log(cards);

function myGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum += firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards [i] + " ";
        }
    sumEl.textContent =  "sum:" + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;

}
    



function newCard() {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
    renderGame()

    }

function checkStart() {
    if (isStart === true) {
        myGame()
        isStart = false;
    } else {
        alert("You cannot start again...")
    }
}


function checkUser () {
    if (isAlive === true) {
        newCard()

    } else {
        alert("You don't have any lives left...")
    }
}

function getRandomCard () {
    let randomNumber = Math.floor ( Math.random() * 13  ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1 ) {
        return 11;
    } else {
        return (randomNumber);
    }
}






let characters = ["a", "b", "c", "d", "e", "r", "@", "4", "9", "#", "-", "q", "x", "£", "%"];
let password1 = document.getElementById("password1");
let passWord2 = document.getElementById("password2");
let Num = 14;

  function generatePassword () {
    let password = "";

    for (i = 0; i < characters.length; i++) {
        password += characters [Math.floor (Math.random() * characters.length)];
        password1.textContent = password;
    }
} 




const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const  inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");



       let leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"));
     
    if (leadsFromLocal) {
        myLeads = leadsFromLocal
    }

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    listItem = ` <li>
                    <a href='${inputEl.value}'
                    target="_blank">${inputEl.value}
                    </a>
                </li> `;
   ulEl.innerHTML += listItem;
       inputEl.value = "";

       
       localStorage.setItem("myLeads", JSON.stringify(myLeads));
       console.log (localStorage.getItem("myLeads") )


    
    
})


function deleteLeads( ) {
    myLeads = [];
    localStorage.removeItem("myLeads");
    ulEl.innerHTML = "";

}



const welcomeEl= document.getElementById("thank-you");

function greet (greeting, name) {
    welcomeEl.textContent = `${greeting} ${name} `

}

greet ("Howdy, ", "Intrepid")


let data = [ {player: "Jane", score: 59},
    {player:"Mark", score: 42}
]




let totalPrice = "420.123647836342";
totalPrice = Number (totalPrice)
const btn = document.getElementById ("log")
const round = totalPrice.toFixed(2);

btn.textContent = `Buy £${round}`



