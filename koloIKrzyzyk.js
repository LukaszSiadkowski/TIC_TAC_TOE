class Game {
    constructor() {
      this.fields = document.querySelectorAll(".field");
      this.fields.forEach((field) => {
        field.addEventListener("click", this.handleFieldClick.bind(this));
      });
    }
  
    handleFieldClick(event) {
      const index = event.target.id;
  
      if (!this.board[index]) {
        this.setFieldValue(index, this.actual);
        this.renderBoard();
        this.changePlayer();
  
        if (this.checkWin()) {
          alert("Winner: " + this.winner);
          this.initGame();
        } else if (this.checkFullBoard()) {
          alert("Draw!");
          this.initGame();
        }
      } else {
        alert("This move is incorrect");
      }
    }
  
    checkFullBoard() {
      return this.board.indexOf("") === -1;
    }
  
    setFieldValue(index, value) {
      this.board[index] = value;
    }
  
    changePlayer() {
      this.actual = this.actual === "O" ? "X" : "O";
    }
  
    initGame() {
      this.actual = this.randomPlayer();
      this.winner = null;
      this.board = new Array(9).fill("");
  
      this.renderBoard();
    }
  
    randomPlayer() {
      return Math.floor(Math.random() * 10) % 2 ? "X" : "O";
    }
  
    renderBoard() {
      this.fields.forEach((field, index) => {
        field.innerText = this.board[index];
      });
    }
  
    checkWin() {
      const board = this.board;
  
      //Horizontal
      for (let i = 0; i < 3; i++) {
        if (this.check3equals(board[i * 3], board[i * 3 + 1], board[i * 3 + 2])) {
          this.winner = board[i * 3];
          return true;
        }
      }
  
      //Vertical
      for (let i = 0; i < 3; i++) {
        if (this.check3equals(board[i], board[i + 3], board[i + 6])) {
          this.winner = board[i];
          return true;
        }
      }
  
      //Diagonal
      if (this.check3equals(board[0], board[4], board[8])) {
        this.winner = board[0];
        return true;
      }
  
      if (this.check3equals(board[2], board[4], board[6])) {
        this.winner = board[0];
        return true;
      }
    }
  
    check3equals(a, b, c) {
      return !!a && a === b && b === c && a === c;
    }
  }
  
  window.addEventListener("load", () => {
    const game = new Game();
  
    game.initGame();
  });



// const combos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// let board;
// let turn = 'X';
// let win;

// const squares = Array.from(document.querySelectorAll('#board div'));
// const messages = document.querySelector('h2');


// function render() {
   
//     board.forEach(function (symbol, index) {

//         squares[index].textContent =symbol;
//     });
//     messages.textContent = win === 'T' ? `Trwa gra` : win ? `${win} wygrywa gre!` : `To tura ${turn} !`;
// }

// function whoWin() {
  
//     let winner = null;
   
//     combos.forEach((combo, index) => {
//         if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) 
//         {
//             winner = board[combo[0]];
//         }
//     });
  
//     return winner ? winner : board.includes('') ? null : 'T';
  
// };

// function changeTurn() {
    
//     let idx = squares.findIndex(function (square) {
//         return square === event.target;
//     });
    
//     board[idx] = turn;

//     if (turn === 'X') {
//         turn = 'O'
//     } else {
//         turn = 'X'
//     };
//     win = whoWin();
//     render();
    
// };

// function init() {
//     board = [
//         '', '', '',
//         '', '', '',
//         '', '', ''
//     ];
//     render()
// };

// function reset() {
    
//     board = [
//         '', '', '',
//         '', '', '',
//         '', '', ''
//     ];
//     render()
//     messages.textContent = `Zresetowales gre. Teraz zaczyna ${turn}`;
// };

// init();



// // if (squares.innerHTML === "X" || square.innerHTML === "O") {
// //     return;
// // }

// document.getElementById('board').addEventListener('click', changeTurn);
// document.getElementById('reset-button').addEventListener('click', reset);