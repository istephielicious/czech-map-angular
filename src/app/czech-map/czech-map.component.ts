import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CzechMapService } from './czech-map.service';

@Component({
  selector: 'app-czech-map',
  templateUrl: './czech-map.component.html',
  styleUrls: ['./czech-map.component.css']
})
export class CzechMapComponent implements OnInit {
  coordinates: object;
  private region: string;
  // @Input() fillColor: string = "#FFFFFF";
  // @Input() fillRegionColor: string = "#FF9900";
  // @Input() strokeColor: string = "#000000";
  @Output('onMapClick') click = new EventEmitter();

  constructor(private czMapService: CzechMapService) { }

  ngOnInit() {
    this.czMapService.getCzMapCoordinates().then(data=> this.coordinates = data);
  }
  
  onCzMapClick(region) {
    this.click.emit({"region": region});
    this.region = region;
  }

}
