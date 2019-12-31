import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autoplay = false;
  controls = false;

  autoplayCheckedHandler(e) {
    this.autoplay = (e.checked === 'true');
  }
  controlsCheckedHandler(e) {
    console.log("e", e);
    this.controls = e.checked;
  }
}
