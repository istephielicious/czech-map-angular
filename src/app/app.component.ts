import { Position } from './radio-settings/radio-settings.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Radio Map';
  position = {x: 900, y: 260, color:'deepPink'};
  czMapClick($event) {
    console.log($event);
  }
}
