import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechMapComponent } from './czech-map.component';

describe('CzechMapComponent', () => {
  let component: CzechMapComponent;
  let fixture: ComponentFixture<CzechMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzechMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzechMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
