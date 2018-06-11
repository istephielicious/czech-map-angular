import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CzechMapModule } from './czech-map/czech-map.module';

import { AlertModule } from 'ngx-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CzechMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
