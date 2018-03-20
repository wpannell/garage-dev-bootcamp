import {NgModule} from '@angular/core';

import {RootComponent} from './root.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CardModule} from '../card/card.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CardModule],
  exports: [RootComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
