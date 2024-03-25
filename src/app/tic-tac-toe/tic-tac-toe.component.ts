import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  player: string = 'X';
  board: string[] = ['','','','','','','','',''];
  winner: string = '';
  winningHand: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  checkWin(){
    for (let i = 0; i < this.winningHand.length; i++){
      const [a, b, c] = this.winningHand[i];
      if(this.board[a] === this.board[b] && this.board[a] === this.board[c] && this.board[a] !== ''){
        this.winner = this.board[a] + ' is the winner!';
        return;
      }
    }
    // Check for a draw (board array filled)
    if (!this.board.includes('')) {
      this.winner = 'Draw';
    }
  }

  handleClick(idx: number){
    if(this.board[idx] === '' && this.winner === ''){
      this.board[idx] = this.player;
      this.player = this.player === 'X'? 'O' : 'X';
    }
    this.checkWin();
  }

  handlePlayAgain(){
    this.board = ['','','','','','','','',''];
    this.winner = '';
  }

}
