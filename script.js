// Script file

//fetch target
const targetValue = 20;
const target = document.getElementById('target-value');
target.textContent = targetValue;

// Play button function | Roll the dice
const playBtn = document.getElementById('dice-btn');
playBtn.addEventListener('click', ()=>{
    let display = document.querySelector('.game-display');
    let displayCont = document.querySelector('.game-inner-left');
    display.classList.add('g-d-small');
    displayCont.classList.add('blur-cont');
    let value = Math.ceil(Math.random() * 6);
    //console.log('clicked');
    setTimeout(()=>{
        display.classList.remove('g-d-small');
        display.src = `assets/${value}.png`;
        displayCont.classList.remove('blur-cont');
    }, 400);
});