import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioptimizersThankYouComponent } from './bioptimizers-thank-you.component';

describe('BioptimizersThankYouComponent', () => {
  let component: BioptimizersThankYouComponent;
  let fixture: ComponentFixture<BioptimizersThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioptimizersThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioptimizersThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
