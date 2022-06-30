let counterDisplay = document.getElementById('counter');
let countPlus = document.getElementById('plus');
let countMinus = document.getElementById('minus');

const updateDisplay = () => counterDisplay.innerHTML = count;

let count = 0;

 //updateDisplay();

countPlus.addEventListener('click', () => {
    count++;
    updateDisplay();
    console.log(count);
    });

countMinus.addEventListener('click', () => {
    count--;
    updateDisplay();
    });
     
function komment(){
    const comment = document.getElementById('comment-form');
    comment.addEventListener("submit", e => {
        e.preventDefault();
        const input = e.target["comment-input"].value;
        const newReview = document.createElement('li');
        newReview.textContent = `${input}`;
        const newDiv = document.getElementById('review');
        newDiv.appendChild(newReview);
    })
}
komment();
// for(i; i > 0; i++) {
    
// }