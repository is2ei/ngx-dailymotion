import { NgModule } from '@angular/core';

import { NgxDailymotionComponent } from './ngx-dailymotion.component';

const COMPONENTS = [NgxDailymotionComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class NgxDailymotionModule {
}
