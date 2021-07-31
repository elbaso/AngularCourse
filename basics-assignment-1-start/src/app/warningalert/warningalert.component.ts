import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: '<h3>Red Alert!</h3>',
    // styleUrls: ['./warningalert.component.css']
    styles: [`
    h3 {
        color: darkred;
        background-color: lightpink;
        width: 50%;
      }
    `]
})
export class WarningAlertComponent {
    
}