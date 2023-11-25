import { Component } from '@angular/core';
import { delay, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //at-progress-spinner
  progress: number = 0;
  timer;
  //mat-spinner
  isLoading: boolean = false;

  constructor() {
    //at-progress-spinner
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) clearInterval(this.timer);
    }, 10);
    //mat-spinner
    this.isLoading = true;
    this.getCourses().subscribe(x => this.isLoading = false);

  }
  //mat-spinner
  getCourses() {
    // return timer(2000);
    return of({}).pipe(delay(2000));
  }
}
