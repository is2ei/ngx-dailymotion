import { 
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';

declare global {
  interface Window { DM: any; }
}

@Component({
  selector: 'dailymotion',
  template: `<div #dailymotion></div>`,
  styles: []
})
export class NgxDailymotionComponent implements AfterViewInit, OnChanges {

  @Input() video: string = '';
  @Input() width: number = 480;
  @Input() height: number = 270;
  @Input() autoplay: boolean = false;
  @Input() autoplayMute: boolean = false;
  @Input() controls: boolean = false;
  @Input() mute: boolean = false;
  @Input() quality: string = 'auto';
  @Input() uiLogo: boolean = false;
  @Input() queueAutoplayNext: boolean = false;
  @Input() queueEnable: boolean = false;
  @Input() sharingEnable: boolean = false;
  @Input() start: number = 0;
  @Input() uiTheme: string = 'dark';

  @Input() pause: boolean = false;

  @ViewChild('dailymotion', {static: false}) div;

  player: any = null;

  constructor(
    public element: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit() {
    if (!this.video) {
      return;
    }

    // https://developer.dailymotion.com/player/#player-parameters
    const options = {
      video: this.video,
      width: this.width,
      height: this.height,
      params: {
        'autoplay': this.autoplay,
        'controls': this.controls,
        'ui-logo': this.uiLogo,
        'ui-theme': this.uiTheme
      }
    };
    this.player = window.DM.player(this.div.nativeElement, options)
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.player) {
      return;
    }

    for (let propName in changes) {
      if (propName === 'video') {
        // https://developer.dailymotion.com/player/#player-parameters
        const options = {
          video: this.video
        };
        this.player.load(options);
      } else if (propName === 'controls') {
        this.player.setControls(this.controls);
      } else if (propName === 'pause') {
        console.log("TEST");
        if (changes[propName].currentValue === 'true') {
          this.player.pause()
        } else {
          console.log("PLAY");
          this.player.play();
        }
      }
    }

  }
}
