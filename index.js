let homeScoreEl = document.getElementById("homeScore")

let FinalHomeScore = 0

function addOneH() {
    FinalHomeScore = FinalHomeScore + 1
    homeScoreEl.textContent = FinalHomeScore
}

function addTwoH() {
    FinalHomeScore = FinalHomeScore + 2
    homeScoreEl.textContent = FinalHomeScore
}

function addThreeH() {
    FinalHomeScore = FinalHomeScore + 3
    homeScoreEl.textContent = FinalHomeScore
}

//

let guestScoreEl = document.getElementById("guestScore")

let FinalGuestScore = 0

function addOneG() {
    FinalGuestScore = FinalGuestScore + 1
    guestScoreEl.textContent = FinalGuestScore
}

function addTwoG() {
    FinalGuestScore = FinalGuestScore + 2
    guestScoreEl.textContent = FinalGuestScore
}

function addThreeG() {
    FinalGuestScore = FinalGuestScore + 3
    guestScoreEl.textContent = FinalGuestScore
}

//

function resetScore() {
    FinalGuestScore = 0
    guestScoreEl.textContent = 0
    FinalHomeScore = 0
    homeScoreEl.textContent = 0
}