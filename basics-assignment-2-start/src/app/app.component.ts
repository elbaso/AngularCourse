import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameEmpty;

  constructor() {
    if (this.username.length == 0) {
      this.usernameEmpty = true;
    }
  }
}
