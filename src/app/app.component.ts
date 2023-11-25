import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' }
  ];
}
