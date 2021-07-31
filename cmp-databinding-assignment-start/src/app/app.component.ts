import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumber = 0;
  isOdd;

  // Need to catch event emittied from GameControl component
  // Event will contain the game counter

  onGameTick(gameData: {gameCount: number}) {
    console.log("onGameTick started. Counter is " + gameData.gameCount);
    this.gameNumber = gameData.gameCount;

    // Output either an even or odd component depending on the counter
    if (this.gameNumber % 2 == 1) { this.isOdd = true; }
    else { this.isOdd = false; }
  }
}
