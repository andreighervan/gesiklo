import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrainTrainingThankYouComponent } from './brain-training-thank-you.component';

describe('BioptimizersThankYouComponent', () => {
  let component: BrainTrainingThankYouComponent;
  let fixture: ComponentFixture<BrainTrainingThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrainTrainingThankYouComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainTrainingThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
