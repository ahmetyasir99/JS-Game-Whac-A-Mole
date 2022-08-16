const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const wordList =['Hey!','You', 'Will', 'Be', 'An', 'Excellent', 'Software','Engineer','Soon']
let result = 0
let hitPosition
let currentTime =10
let timerId = null // can delete timerId but used to clear interval

/* The mouseover event listener should be removed because it count after finishing. */

function randomSquare() {    
    squares.forEach(square => {
        square.classList.remove('mole')
        square.innerHTML = ''
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    
    randomSquare.classList.add('mole')
    randomSquare.innerHTML = wordList[randomSquare.getAttribute('id') -1] //randomSquare.id
    hitPosition = randomSquare.id
    console.log(hitPosition)
    
}

squares.forEach(square =>{
    square.addEventListener('mouseover', ()=>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null; //in this way, multiple points from the same square is avoided
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare,500) //call the function every 500ms
}

moveMole()

let countDownTimerId = setInterval(countDown,1000)

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Time is up, Your final score is:' + result)

    }
}