import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CzechMapService } from './czech-map.service';
import { CzechMapComponent } from './czech-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CzechMapComponent],
  providers: [CzechMapService],
  exports: [CzechMapComponent]
})
export class CzechMapModule { }
