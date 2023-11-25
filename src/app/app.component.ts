import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate = new Date(2023, 10, 1); // 1/11/2023
  maxDate = new Date(2023, 10, 30);//1/12/2023

}
