import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CzechMapService } from './czech-map.service';
import { CzechMapComponent } from './czech-map.component';

import { AlertModule } from 'ngx-bootstrap'

@NgModule({
  imports: [
    AlertModule.forRoot(),
    CommonModule,
  ],
  declarations: [CzechMapComponent],
  providers: [CzechMapService],
  exports: [CzechMapComponent]
})
export class CzechMapModule { }
