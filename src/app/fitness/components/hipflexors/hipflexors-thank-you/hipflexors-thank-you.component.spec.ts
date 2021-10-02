import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipflexorsThankYouComponent } from './hipflexors-thank-you.component';

describe('HipflexorsThankYouComponent', () => {
  let component: HipflexorsThankYouComponent;
  let fixture: ComponentFixture<HipflexorsThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipflexorsThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipflexorsThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
