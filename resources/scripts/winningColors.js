export const winningColors = () => {
    let gameHeader = document.getElementById("game-header");
    let userSection = document.getElementById("user-section");
    let computerSection = document.getElementById("computer-section");
    let playersSection = document.getElementById("players-section");
    let color = "#FCF6B1";
    let boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px";

    if (gameHeader.innerHTML === "You win!") {
        userSection.style.backgroundColor = color;
        computerSection.style.backgroundColor = "#FCFFF7";
        playersSection.style.boxShadow = boxShadow;

    } else if (gameHeader.innerHTML === "The computer wins! :(") {
        computerSection.style.backgroundColor = color;
        userSection.style.backgroundColor = "#FCFFF7";
        playersSection.style.boxShadow = boxShadow;

    } else {
        computerSection.style.backgroundColor = color;
        userSection.style.backgroundColor = color;

        playersSection.style.boxShadow = boxShadow;

    }

};