import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipflexorsDownloadEbookComponent } from './hipflexors-download-ebook.component';

describe('HipflexorsDownloadEbookComponent', () => {
  let component: HipflexorsDownloadEbookComponent;
  let fixture: ComponentFixture<HipflexorsDownloadEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipflexorsDownloadEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipflexorsDownloadEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
