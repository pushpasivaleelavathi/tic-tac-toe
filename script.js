const cells = document.querySelectorAll(".cell");
const turn = document.getElementById("turn");
const result = document.getElementById("result");
const newGame = document.getElementById("newGame");

const xScore = document.getElementById("xScore");
const oScore = document.getElementById("oScore");

let board = ["", "", "", "", "", "", "", "", ""];

let player = "X";
let gameOver = false;

let x = 0;
let o = 0;

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell, i) => {

    cell.onclick = () => {

        if (board[i] || gameOver) {
            return;
        }

        board[i] = player;

        cell.textContent = player;
        cell.classList.add(player.toLowerCase());

        check();

    };

});


function check() {

    for (let win of wins) {

        let a = win[0];
        let b = win[1];
        let c = win[2];

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {

            gameOver = true;

            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");

            result.textContent =
                "Player " + player + " Wins!";

            if (player === "X") {
                x++;
                xScore.textContent = x;
            } else {
                o++;
                oScore.textContent = o;
            }

            turn.textContent = "Game Over";

            return;
        }
    }

    if (!board.includes("")) {

        gameOver = true;

        result.textContent = "Game Draw!";

        turn.textContent = "Game Over";

        return;
    }

    player = player === "X" ? "O" : "X";

    turn.textContent =
        "Player " + player + "'s Turn";
}


newGame.onclick = () => {

    board = ["", "", "", "", "", "", "", "", ""];

    player = "X";
    gameOver = false;

    cells.forEach(cell => {

        cell.textContent = "";

        cell.classList.remove(
            "x",
            "o",
            "win"
        );

    });

    result.textContent = "";

    turn.textContent = "Player X's Turn";
};