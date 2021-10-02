import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioptimizersDownloadEbookComponent } from './bioptimizers-download-ebook.component';

describe('BioptimizersDownloadEbookComponent', () => {
  let component: BioptimizersDownloadEbookComponent;
  let fixture: ComponentFixture<BioptimizersDownloadEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioptimizersDownloadEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioptimizersDownloadEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
