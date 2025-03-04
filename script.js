document.getElementById('img_banner').style.backgroundImage = "url('ohno.png')";

let nox = '';
let noy='';
let operator ='';
let error = 'Error';

function number(No) {
    if (!operator) {
        if (!nox) {
            nox = No;
        } else {
            nox= nox + No;
        }
        updateDisplay(nox);
    } else if (operator) {
        if (!noy) {
            noy = No;
        } else {
            noy= noy + No;
        }
        updateDisplay(noy);
    }
}

function operate(Op) {     
    if (!nox) {
        updateDisplay(error);
    } else if (operator) {
        updateDisplay(error);
    } else {
        operator = Op;
    }
}

function calculate() {
    if (nox && noy && operator) {

        let result = '';

        if (operator === '+') {
            result = Number(nox) + Number(noy); // Add the two numbers
        } else if (operator === '-') {
            result = nox - noy; // Subtract the two numbers
        } else if (operator === '*') {
            result = nox * noy; // Multiply the two numbers
        } else if (operator === '/') {
            if (noy !== 0) {
                result = nox / noy; // Divide the two numbers, checking for division by zero
            } else {
                updateDisplay(error);
            }
        } else {
            updateDisplay(error); // Handle invalid operator
        }
        updateDisplay(result);
        refreshValues ();
        document.getElementById('img_banner').style.backgroundImage = "url('ohyes.png')";
    }
}

// fix this for realzzzzz 
function updateDisplay(value){
    const display = document.getElementById('display_div');
    const picture = document.getElementById('img_banner');
    if (value === 'Error'){
        picture.style.backgroundImage = "url('ohno.png')";
        display.textContent = 'Error';
        refreshValues ();
    } else if (value === ''){
        display.innerText = '';
        picture.style.backgroundImage = "url('ohno.png')";
        refreshValues();
    }   else {
        display.innerText = value;
        picture.style.backgroundImage = "url('ohno.png')";
    }
}

function refreshValues () {
    nox = '';
    noy = '';
    operator = '';
}







