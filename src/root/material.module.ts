import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MATERIAL_SANITY_CHECKS} from '@angular/material/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ],
  providers: [{provide: MATERIAL_SANITY_CHECKS, useValue: false}]
})
export class MaterialModule { }
