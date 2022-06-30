let counterDisplay = document.getElementById('counter');
let countPlus = document.getElementById('plus');
let countMinus = document.getElementById('minus');

const updateDisplay = () => counterDisplay.innerHTML = count;

let count = 0;

// updateDisplay();

countPlus.addEventListener('click', () => {
    count++;
    updateDisplay();
    console.
    });

countMinus.addEventListener('click', () => {
    count--;
    updateDisplay();
    });


// for(i; i > 0; i++) {
    
// }