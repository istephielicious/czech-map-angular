import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSettingsComponent } from './radio-settings.component';

describe('RadioSettingsComponent', () => {
  let component: RadioSettingsComponent;
  let fixture: ComponentFixture<RadioSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
