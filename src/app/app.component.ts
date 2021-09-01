import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-grid';
  localData=[
    {
      "First Name":"Swapnil",
      "Last Name":"Tomake",
      "Email":"swapniltomake999@gmail.com"
    }
  ]
}
