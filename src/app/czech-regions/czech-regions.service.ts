import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CzechRegionsService {
  private regionLabels = [
    {"x": "100", "y": "100", "label": "Liberec"},
    {"x": "600", "y": "600", "label": "Prague"},
  ];

  getMaplabels() {
    return Promise.resolve(this.regionLabels);
  }
}
