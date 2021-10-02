import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrainTrainingDownloadEbookComponent } from './brain-training-download-ebook.component';

describe('BioptimizersDownloadEbookComponent', () => {
  let component: BrainTrainingDownloadEbookComponent;
  let fixture: ComponentFixture<BrainTrainingDownloadEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrainTrainingDownloadEbookComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainTrainingDownloadEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
