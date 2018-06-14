import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CzechMapModule } from './czech-map/czech-map.module';

import { AlertModule } from 'ngx-bootstrap';
import { MapSettingsComponent } from './map-settings/map-settings.component';
import { RadioSettingsComponent } from './radio-settings/radio-settings.component'

@NgModule({
  declarations: [
    AppComponent,
    MapSettingsComponent,
    RadioSettingsComponent,
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
