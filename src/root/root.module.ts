import {NgModule} from '@angular/core';

import {RootComponent} from './root.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [BrowserModule],
  exports: [RootComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
