import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos = [
    { id: 'x26ezrb', name: 'Hackathon BeMyApp/Dailymotion' },
    { id: 'x26ezj5', name: 'Greetings' },
    { id: 'x26m1j4', name: 'Wildlife' }
  ];
  selectedVideo = this.videos[0];
  volume = 0;
  qualities = [
    '240',
    '380',
    '480',
    '720',
    '1080',
    '1440',
    '2160'
  ];
  controls = false;
  pause = false;

  controlsCheckedHandler(event: MatCheckboxChange) {
    this.controls = event.checked;
  }
  pauseCheckedHandler(event: MatCheckboxChange) {
    this.pause = event.checked;
  }
}
