import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CzechMapModule } from './czech-map/czech-map.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CzechMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
