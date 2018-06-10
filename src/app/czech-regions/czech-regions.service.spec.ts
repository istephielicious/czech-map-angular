import { TestBed, inject } from '@angular/core/testing';

import { CzechRegionsService } from './czech-regions.service';

describe('CzechRegionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CzechRegionsService]
    });
  });

  it('should be created', inject([CzechRegionsService], (service: CzechRegionsService) => {
    expect(service).toBeTruthy();
  }));
});
