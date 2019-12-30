import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDailymotionModule } from 'ngx-dailymotion';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDailymotionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
