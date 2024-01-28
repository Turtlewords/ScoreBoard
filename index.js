let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let period = 0
let fouls = 0
let timer = 0
let periodEl = document.getElementById("period-text")
let foulEl = document.getElementById("foul-text")
let timerEl = document.getElementById("timer-text")

function add1Home() {
    homeScoreEl.textContent = homeScore += 1
}

function add2Home() {
    homeScoreEl.textContent = homeScore += 2
}

function add3Home() {
    homeScoreEl.textContent = homeScore += 3
}

function add1Guest() {
    guestScoreEl.textContent = guestScore += 1
}

function add2Guest() {
    guestScoreEl.textContent = guestScore += 2
}

function add3Guest() {
    guestScoreEl.textContent = guestScore += 3
}

function newGame() {
    homeScore = 0
    guestScore = 0
    period = 0 
    fouls = 0
    timer = 0 
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    periodEl.textContent = period
    foulEl.textContent = fouls
    foulEl.textContent = fouls
}

function addPeriod() {
    periodEl.textContent = period += 1
}

function addFoul() {
    foulEl.textContent = fouls += 1
}

function removeFoul() {
    foulEl.textContent = fouls -= 1
    
}

function highlight() {
    if (homeScore > guestScore) {
        homeScoreEl.style.borderColor = "yellow";
    } else if (guestScore > homeScore) {
        guestScoreEl.style.borderColor = "yellow";
    } 

}