// Script file for the game : Simple Ludo Game

//fetch target
const targetValue = 20;
document.getElementById('target-value').textContent = targetValue;
let score = 0;

//setting highScore board
let highScore = 0;
window.onload = () =>{
    if(localStorage.getItem('highScore')){
        highScore = parseInt(localStorage.getItem('highScore')); //localStorage store things as string
        document.getElementById('highest-score-value').textContent = highScore;
    }
}

//set five chances in each play
let chances = 5;
const gameChances = document.getElementsByClassName('gC-boxs');

// Play button function | Roll the dice
const playBtn = document.getElementById('dice-btn');
let display = document.querySelector('.game-display'),
    displayCont = document.querySelector('.game-inner-left'),
    scoreValue = document.getElementById('score-value');

playBtn.addEventListener('click', ()=>{
    if(chances>0){
        display.classList.add('g-d-small');
        displayCont.classList.add('blur-cont');
        let value = Math.ceil(Math.random() * 6);
        score += value;
        setTimeout(changeDisplay, 400, score, value);
        document.getElementById('current-score').textContent = value;
        chances--;
        console.log(chances);
        gameChances[chances].classList.add('hide-out');
        if(chances===1)
            gameChances[0].style.backgroundColor = 'rgba(255,0,0,0.7)';
        if(score>=targetValue || chances===0){ ////if target is reached before 5 tries || 5 tries
            showResult(score);
        }
    }
});

//changing display image and some other op
function changeDisplay(score, value){
    display.classList.remove('g-d-small');
    display.src = `assets/${value}.png`;
    displayCont.classList.remove('blur-cont');
    scoreValue.textContent = score;
    document.querySelector('.circle-outer').style.backgroundImage = `conic-gradient(rgba(0,0,255, 0.75) ${score * 18}deg, #eff 0deg)`;
}

// Showing Result
function showResult(score){
    document.getElementById('messageBox').style.display = 'block';
    document.getElementById('mB-score').textContent = 'Your score is ' + score;
    document.querySelector('.game-section').classList.add('blur');
    if(score<targetValue){
        document.getElementById('mB-message').textContent = 'Alas!';
        document.getElementById('mB-result').textContent = 'You Lose';
        document.getElementById('replay-btn').textContent = 'Try Again?';
    }
    if(score>highScore){
        localStorage.setItem('highScore', score);
    }
}
document.getElementById('replay-btn').addEventListener('click', ()=>
    //document.location = 'index.html'
    window.location.reload()
);