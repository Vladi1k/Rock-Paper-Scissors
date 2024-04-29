const base = ["rock", "paper", "scissors"]

let stats = JSON.parse(localStorage.getItem("stats"))

if(!stats){
    stats = {
        rank: 0,
        played: 0,
        won: 0,
        lost: 0,
    }
}

function saveStats(){
    localStorage.setItem("stats",JSON.stringify(stats))
}

function updateStats(isWin){
    if(isWin){
        stats.won++
    }
    else{
        stats.lost++
    }
    if(stats.won >= 100){
        stats.rank = "Diamond"
    } else if(stats.won >= 50){
        stats.rank = "Gold"
    } else if(stats.won >= 30){
        stats.rank = "Silver"
    } else if(stats.won >= 10){
        stats.rank = "Bronze"
    } else {
        stats.rank = "No rank"
    }
    saveStats()
}

let ai_result = ""

const aiImg = document.querySelector(".result-img-ai")
const resultText = document.querySelector(".result__title")
const playerImg = document.querySelector(".result-img-player")
const playScreen = document.querySelector(".play-screen");
const resultScreen = document.querySelector(".result-screen");
const statsScreen = document.querySelector(".stats-screen");
const played = document.getElementById("played")
const won = document.getElementById("won")
const lost = document.getElementById("lost")
const draw = document.getElementById("draw")
const rank = document.getElementById("rank")

function ai(){
    const index = Math.floor(Math.random() * base.length)
    ai_result = base[index]
}

function playAgain(){
    resultScreen.style.display = "none"
    playScreen.style.display = "block"
    playScreen.classList.add('show');
}



function rockClick(){

    ai();
    console.log(ai_result);
    playerImg.src = "./images/result-menu/rock-player.png"
    playScreen.style.display = "none";
    resultScreen.style.display = "flex";
    resultScreen.classList.add('show');
    if(ai_result === "paper"){
        aiImg.src = "./images/result-menu/paper-ai.png";
        resultText.innerHTML = "you lose :(";
        stats.played++
        updateStats(false)
    } else if(ai_result === "scissors"){
        aiImg.src = "./images/result-menu/scissors-ai.png";
        resultText.innerHTML = "you win! :)";
        stats.played++
        updateStats(true)
    } else {
        aiImg.src = "./images/result-menu/rock-ai.png";
        resultText.innerHTML = "IT’S A DRAW ";
        stats.played++
    }
    

}

function paperClick(){
    ai();
    console.log(ai_result);
    playerImg.src = "./images/result-menu/paper-player.png"
    playScreen.style.display = "none";
    resultScreen.style.display = "flex";
    resultScreen.classList.add('show');
    if(ai_result === "scissors"){
        aiImg.src = "./images/result-menu/scissors-ai.png";
        resultText.innerHTML = "you lose :(";
        stats.played++
        updateStats(false)
    } else if(ai_result === "rock"){
        aiImg.src = "./images/result-menu/rock-ai.png";
        resultText.innerHTML = "you win! :)";
        stats.played++
        updateStats(true)
    } else {
        aiImg.src = "./images/result-menu/paper-ai.png";
        resultText.innerHTML = "IT’S A DRAW ";
        stats.played++
    }
}

function scissorsClick(){
    ai();
    console.log(ai_result);
    playerImg.src = "./images/result-menu/scissors-player.png"
    playScreen.style.display = "none";
    resultScreen.style.display = "flex";
    resultScreen.classList.add('show');
    if(ai_result === "rock"){
        aiImg.src = "./images/result-menu/rock-ai.png";
        resultText.innerHTML = "you lose :(";
        stats.played++
        updateStats(false)
    } else if(ai_result === "paper"){
        aiImg.src = "./images/result-menu/paper-ai.png";
        resultText.innerHTML = "you win! :)";
        stats.played++
        updateStats(true)
    } else {
        aiImg.src = "./images/result-menu/scissors-ai.png";
        resultText.innerHTML = "IT’S A DRAW ";
        stats.played++
    }
}


function checkStats(){
    playScreen.style.display = "none"
    statsScreen.style.display = "flex"
    played.textContent = stats.played;
    won.textContent = stats.won;
    lost.textContent = stats.lost;
    rank.textContent = stats.rank;
}

function backGame(){
    statsScreen.style.display = "none"
    playScreen.style.display = "block"
}