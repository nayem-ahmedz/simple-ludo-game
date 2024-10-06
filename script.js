// Script file for the game

//fetch target
const targetValue = 20;
const target = document.getElementById('target-value');
target.textContent = targetValue;
let score = 0;

//set five chances in each play
let chances = 5;
let gameChances = document.getElementsByClassName('gC-boxs');

// Play button function | Roll the dice
const playBtn = document.getElementById('dice-btn');
playBtn.addEventListener('click', ()=>{
    if(chances>1){
        let display = document.querySelector('.game-display');
        let displayCont = document.querySelector('.game-inner-left');
        let scoreValue = document.getElementById('score-value');
        display.classList.add('g-d-small');
        displayCont.classList.add('blur-cont');
        let value = Math.ceil(Math.random() * 6);
        score += value;
        setTimeout(()=>{
            display.classList.remove('g-d-small');
            display.src = `assets/${value}.png`;
            displayCont.classList.remove('blur-cont');
            scoreValue.textContent = score;
            document.querySelector('.circle-outer').style.backgroundImage = `conic-gradient(rgba(0,0,255, 0.75) ${score * 18}deg, #eff 0deg)`;
        }, 400);
        chances--;
        if(score>=targetValue)
            return showResult(score);
        gameChances[chances].classList.add('hide-out');
        if(chances==1)
            document.querySelector('.gC-boxs').style.backgroundColor = 'rgba(255,0,0,0.7)';
    } else{
        showResult(score);
    }
});

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
}
document.getElementById('replay-btn').addEventListener('click', ()=>
    document.location = 'index.html'
);