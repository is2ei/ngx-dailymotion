import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

declare global {
  interface Window { DM: any; }
}

@Component({
  selector: 'dailymotion',
  template: `<div #dailymotion></div>`,
  styles: []
})
export class NgxDailymotionComponent implements OnInit, AfterViewInit {

  @ViewChild('dailymotion', {static: false}) div;

  player: any;

  constructor(
    public element: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.player = window.DM.player(this.div.nativeElement, {
      video: 'xwr14q'
    })
  }

}
