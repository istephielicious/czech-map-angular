import { Component, Input } from '@angular/core';

@Component({
  selector: 'radio-settings',
  templateUrl: './radio-settings.component.html',
  styleUrls: ['./radio-settings.component.css']
})
export class RadioSettingsComponent {
  @Input('position') position: Position;
}

export interface Position {
  x: number;
  y: number;
  color: string;
}
