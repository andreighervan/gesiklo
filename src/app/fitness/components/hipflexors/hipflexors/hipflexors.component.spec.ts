import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipflexorsComponent } from './hipflexors.component';

describe('HipflexorsComponent', () => {
  let component: HipflexorsComponent;
  let fixture: ComponentFixture<HipflexorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipflexorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipflexorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
