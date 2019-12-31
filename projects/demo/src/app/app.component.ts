import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  controls = false;
  pause = false;

  controlsCheckedHandler(event: MatCheckboxChange) {
    this.controls = event.checked;
  }
  pauseCheckedHandler(event: MatCheckboxChange) {
    this.pause = event.checked;
  }
}
