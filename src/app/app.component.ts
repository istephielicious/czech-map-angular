import { Position } from './radio-settings/radio-settings.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Radio Map';
  Positions = [
    {x: 900, y: 260, color: 'SeaGreen'},
    {x: 500, y: 260, color: 'RoyalBlue'},
    {x: 750, y: 400, color: 'Tomato'},
    {x: 900, y: 300, color: 'Violet'},
    {x: 900, y: 260, color: 'PaleVioletRed'}
  ];
  czMapClick($event) {
    console.log($event);
  }
}
