import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayed = false;
  buttonClicks = [];

  addButtonClick() {
    this.displayed = !this.displayed;

    var dt = new Date();
    var currTimestamp = dt.toUTCString();
    console.log(currTimestamp);
    this.buttonClicks.push(currTimestamp);
  }
}
