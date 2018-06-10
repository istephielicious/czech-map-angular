import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CzechRegionsService } from './czech-regions.service';

@Component({
  selector: 'app-czech-regions',
  templateUrl: './czech-regions.component.html',
  styleUrls: ['./czech-regions.component.css']
})
export class CzechRegionsComponent implements OnInit {
  region_label: object;
  @Output('onMapLblClick') click = new EventEmitter();

  constructor(private mapLabelService: CzechRegionsService) { }
  

  ngOnInit() {
    this.mapLabelService.getMaplabels().then(data=> this.region_label = data);    
  }

}
