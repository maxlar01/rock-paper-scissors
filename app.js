let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getCompChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

const convertToWord = (letter) => {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

const win = (userChoice, compChoice) => {
    const smallUserWord = "( user )".fontsize(3).sub();
    const smallCompWord = "( comp )".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} .You win 🔥`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => { userChoice_div.classList.remove("green-glow") }, 400);
}

const lose = (userChoice, compChoice) => {
    const smallUserWord = "( user )".fontsize(3).sub();
    const smallCompWord = "( comp )".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord} .You lost 🐸`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => { userChoice_div.classList.remove("red-glow") }, 500);
}

const draw = (userChoice, compChoice) => {
    const smallUserWord = "( user )".fontsize(3).sub();
    const smallCompWord = "( comp )".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord} .It's a draw 😐`
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => { userChoice_div.classList.remove("gray-glow") }, 500);
}

const game = (userChoice) => {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => {
        game("r");
    })

    paper_div.addEventListener("click", () => {
        game("p");
    })

    scissors_div.addEventListener("click", () => {
        game("s");
    })
}

main();
