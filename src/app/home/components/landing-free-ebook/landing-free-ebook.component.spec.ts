import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFreeEbookHomeComponent } from './landing-free-ebook.component';

describe('LandingFreeEbookHomeComponent', () => {
  let component: LandingFreeEbookHomeComponent;
  let fixture: ComponentFixture<LandingFreeEbookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingFreeEbookHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFreeEbookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
