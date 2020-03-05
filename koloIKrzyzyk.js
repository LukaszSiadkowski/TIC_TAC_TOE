const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let board;
let turn = 'X';
let win;

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');


function render() {
    board.forEach(function (symbol, index) {

        squares[index].textContent =symbol;
    });
    messages.textContent = win === 'T' ? `Trwa gra` : win ? `${win} wygrywa gre!` : `To tura ${turn} !`;
}

function whoWin() {
    let winner = null;
    combos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
        }
    });
  
    return winner ? winner : board.includes('') ? null : 'T';
};

function changeTurn() {
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    });
    board[idx] = turn;

    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    };
    win = whoWin();
    render();
};

function init() {
    board = [
        'Plansza1', 'Plansza2', 'Plansza3',
        'Plansza4', 'Plansza5', 'Plansza6',
        'Plansza7', 'Plansza8', 'Plansza9'
    ];
    render()
};



init();

document.getElementById('board').addEventListener('click', changeTurn);
document.getElementById('reset-button').addEventListener('click', init);