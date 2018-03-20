import {NgModule} from '@angular/core';

import {MaterialModule} from '../root/material.module';
import {CardComponent} from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [MaterialModule],
  exports: [CardComponent],
  providers: []
})
export class CardModule {
}
