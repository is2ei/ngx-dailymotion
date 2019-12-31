import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxDailymotionModule } from 'ngx-dailymotion';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatToolbarModule,
    NgxDailymotionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
