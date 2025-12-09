const inputEl = document.getElementById("input-ell");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const convertBtn = document.getElementById("convert-btn");


function lengthCalc () {
    if (inputEl.value === "" || inputEl.value === NaN || isNaN(inputEl.value)) {
    alert("Please enter some numbers!!!")

} else {

       let l1 = inputEl.value * 3.281;
        let l2 = inputEl.value * 0.3048;
        l1 = l1.toFixed(3);
        l2 = l2.toFixed(3);
    lengthEl.textContent = `${inputEl.value}
    meters = ${l1} feet | ${inputEl.value} 
    feet = ${l2} meters `;
    volumeCalc();
    massCalc();

    }

    function volumeCalc () {
       let v1 = inputEl.value * 0.264;
        let v2 = inputEl.value * 3.78541;
        v1 = v1.toFixed(3);
        v2 = v2.toFixed(3);
    volumeEl.textContent = `${inputEl.value}
    litres = ${v1} gallon | ${inputEl.value} 
    gallons = ${v2} litres `;

    }

    function massCalc () {
        let result1 = inputEl.value * 2.20462  ;
        let res2 = inputEl.value * 0.453592;
        result1 = result1.toFixed(3);
        res2 = res2.toFixed(3);
    massEl.textContent = `${inputEl.value}
    kilos = ${result1} pounds | ${inputEl.value} 
    pounds = ${res2 } kilos `;

    }
}

