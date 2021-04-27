import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouEbookHomeComponent } from './thank-you-ebook.component';

describe('ThankYouEbookHomeComponent', () => {
  let component: ThankYouEbookHomeComponent;
  let fixture: ComponentFixture<ThankYouEbookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThankYouEbookHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouEbookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
