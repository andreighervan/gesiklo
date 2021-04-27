import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFreeEbookHomeComponent } from './download-free-ebook.component';

describe('DownloadFreeEbookComponent', () => {
  let component: DownloadFreeEbookHomeComponent;
  let fixture: ComponentFixture<DownloadFreeEbookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadFreeEbookHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFreeEbookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
