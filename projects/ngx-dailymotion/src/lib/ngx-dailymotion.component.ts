import { 
  Component,
  Input,
  OnChanges,
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

  @Input() autoplay: boolean = false;
  @Input() autoplayMute: boolean = false;
  @Input() controls: boolean = false;
  @Input() mute: boolean = false;
  @Input() quality: string = 'auto';
  @Input() uiLogo: boolean = false;
  @Input() uiTheme: string = 'dark';

  @ViewChild('dailymotion', {static: false}) div;

  player: any = null;

  constructor(
    public element: ElementRef<HTMLElement>
  ) { }

  ngAfterViewInit() {
    // https://developer.dailymotion.com/player/#player-parameters
    const options = {
      video: 'xwr14q',
      params: {
        'autoplay': this.autoplay,
        'controls': this.controls,
        'ui-logo': this.uiLogo,
        'ui-theme': this.uiTheme
      }
    };
    this.player = window.DM.player(this.div.nativeElement, options)
  }

  ngOnChanges() {
    if(!this.player) {
      return;
    }
    console.log("this.autoplay", this.autoplay);
    console.log("this.controls", this.controls);
    // https://developer.dailymotion.com/player/#player-parameters
    const options = {
      video: 'xwr14q',
      params: {
        'autoplay': this.autoplay,
        'controls': this.controls,
        'ui-logo': this.uiLogo,
        'ui-theme': this.uiTheme
      }
    };
    this.player.load(options);
  }
}
