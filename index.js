let picks = ["rock", "scissors", "paper", "lizzard", "spock"];

let form = document.querySelector("#submit");
form.addEventListener("submit", function mySubmit(e) {
    let randomPick = picks[Math.floor(Math.random() * picks.length)]
    let element = document.querySelector("#userChoice");
    let userPick = element.value; 
    if (userPick == randomPick) {
        document.querySelector("#result").innerHTML = "Tie"
    } else {
        //Use Rock
        if (userPick == "rock" && randomPick == "lizzard" || userPick == "rock" && randomPick == "scissors") {
            document.querySelector("#result").innerHTML = "Win"
            //Use Paper
        } else if (userPick == "paper" && randomPick == "rock" || userPick == "paper" && randomPick == "spock") {
            document.querySelector("#result").innerHTML = "Win"
            //Use Scissors
        } else if (userPick == "scissors" && randomPick == "paper" || userPick == "scissors" && randomPick == "lizzard") {
            document.querySelector("#result").innerHTML = "Win"
            //Use Spock
        } else if (userPick == "spock" && randomPick == "scissors" || userPick == "spock" && randomPick == "rock") {
            document.querySelector("#result").innerHTML = "Win"
            //Use Lizzard
        } else if (userPick == "lizzard" && randomPick == "spock" || userPick == "lizzard" && randomPick == "paper") {
            document.querySelector("#result").innerHTML = "Win"
        } else {
            document.querySelector("#result").innerHTML = "Lose"
        }
    }
    e.preventDefault();
})

