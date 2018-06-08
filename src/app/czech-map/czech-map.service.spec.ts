import { TestBed, inject } from '@angular/core/testing';

import { CzechMapService } from './czech-map.service';

describe('CzechMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CzechMapService]
    });
  });

  it('should be created', inject([CzechMapService], (service: CzechMapService) => {
    expect(service).toBeTruthy();
  }));
});
