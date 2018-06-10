import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechRegionsComponent } from './czech-regions.component';

describe('CzechRegionsComponent', () => {
  let component: CzechRegionsComponent;
  let fixture: ComponentFixture<CzechRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzechRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzechRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
