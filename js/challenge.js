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

// countPlus.addEventListener('click', () => {
//     increment(1);
//     });

// countMinus.addEventListener('click', () => {
//     increment(-1);
//     });

// const increment = (e) => {
//     count = counterNum + (e);
//     updateDisplay();
// }
     
function commentFun(){
    const comment = document.getElementById('comment-form');
    comment.addEventListener("submit", e => {
        e.preventDefault();
        const input = e.target.comment.value;
        const newReview = document.createElement('li');
        newReview.textContent = `${input}`;
        const commentContainer = document.getElementById('list');
        commentContainer.appendChild(newReview);
    })
}
commentFun();

let paused = false;

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', () => {
    if(paused) {
        timerId = setInterval( () => {
            increment(); // doesn't work until I rip the incrementer they built
        }, 1000)
    } else {
        const buttons = [countMinus, countPlus, heartElement]
        buttons.forEach(button => button.disabled = true)
        clearInterval( timerId)
    }

    paused = // gotta 
    
    
    stopInterval();
})

// let timerId = setInterval(() => {
//     console.log('hello world');
// }, 1000);

function stopInterval () {
    clearInterval(timerId);
}