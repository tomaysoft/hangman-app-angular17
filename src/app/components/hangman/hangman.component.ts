import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  gameTitle: string = 'Hangman Game - Angular v. 17 edition';
  word: string = '';
  displayedWord: string = '';
  incorrectGuesses: string[] = [];
  maxIncorrectGuesses: number = 6;
  isGameOver: boolean = false;
  isWordShown: boolean = false;
  userWins: boolean = false;

  letterInput: string = '';

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    // You can fetch a random word from an API or define a list of words.
    const words = ['angular', 'typescript', 'javascript', 'developer', 'hangman'];
    this.word = words[Math.floor(Math.random() * words.length)];

    // Initialize game state
    this.displayedWord = '_'.repeat(this.word.length);
    this.incorrectGuesses = [];
    this.isGameOver = false;
    this.isWordShown = false;
    this.userWins = false;
  }

  guessLetter(letter: string) {

    if (!this.isGameOver && this.word.includes(letter)) {
      // Update displayed word
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          this.displayedWord = this.displayedWord.substr(0, i) + letter + this.displayedWord.substr(i + 1);
        }
      }

      // Check for win
      if (this.displayedWord === this.word) {
        this.isGameOver = true;
        this.userWins = true;
      }

    } else if (!this.isGameOver && !this.incorrectGuesses.includes(letter)) {
      // Incorrect guess
      this.incorrectGuesses.push(letter);

      // Check for game over
      if (this.incorrectGuesses.length === this.maxIncorrectGuesses) {
        this.isGameOver = true;
        this.isWordShown = true;
      }
    }
    this.letterInput = '';
  }
}
