let counterDisplay = document.getElementById('counter');

let countPlus = document.getElementById('plus');
let countMinus = document.getElementById('minus');
const heartElement = document.getElementById('heart');
const likesContainer = document.querySelector('ul.likes');

heartElement.addEventListener('click', () => {
    
    const currentNumber = counterDisplay.textContent;

    const likeElement = document.getElementById(`likes-${currentNumber}`);

    if (!likeElement) {
        const li = document.createElement('li');
        li.id = `likes-${currentNumber}`;
        const string = `${currentNumber} has been liked <span>1</span> times.`;

        li.innerHTML = string;
        likesContainer.append(li);
    } else {
        const innerSpanElement = likeElement.querySelector('span');
        const currentLikeNumberAsAString = innerSpanElement.textContent;
        const likeNumber = parseInt( currentLikeNumberAsAString);
        innerSpanElement.textContent = likeNumber + 1;
    }
})

countPlus.addEventListener('click', increment);

countMinus.addEventListener('click', () => {
    let counterNum = parseInt((counterDisplay.textContent), 10);
    counterDisplay.textContent = counterNum - 1;
});

function increment() {
    let counterNum = parseInt((counterDisplay.textContent), 10);
    counterDisplay.textContent = counterNum + 1;
}

const comment = document.getElementById('comment-form');

comment.addEventListener("submit", e => {
    e.preventDefault();
    const input = e.target.comment.value;
    const newReview = document.createElement('li');
    
    newReview.textContent = `${input}`;
    
    const commentContainer = document.getElementById('list');
    commentContainer.appendChild(newReview);
})

let timerId = setInterval( () => {
    increment();
}, 1000);
let paused = false;
const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
    if(paused) {
        timerId = setInterval( () => {
            increment();
        }, 1000)
        pauseSwitch();
    } else {
        pauseSwitch();
        clearInterval( timerId)
    }
    paused = !paused;
})

function pauseSwitch() {
    const buttons = [countMinus, countPlus, heartElement]
    buttons.forEach(button => button.disabled = !paused) 
}