import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameCounter = 0;
  // Need reference to timer property
  gameTimer;
  // Need custom event to emit once a second
  @Output('gameTick') gameTickEmitter = new EventEmitter<{gameCount: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log("Start game clicked");
    // Start the counter to emit once 1 every second
    this.gameTimer = setInterval(
      () => { 
        this.gameCounter++; 
        console.log("Timer tick. Counter: " + this.gameCounter);
        this.gameTickEmitter.emit({gameCount: this.gameCounter});
      },
      1000);
  }

  pauseGame() {
    console.log("Pause game clicked");
    // Stop the counter from emitting
    clearInterval(this.gameTimer);
  }

}
