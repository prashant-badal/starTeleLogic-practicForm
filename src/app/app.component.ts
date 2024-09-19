import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
    .myLogo{
    height: 100px;
    width: 100px;
}
    `]

})
export class AppComponent {
  title = 'first-app';
}
