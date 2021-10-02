import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioptimizersComponent } from './bioptimizers.component';

describe('BioptimizersComponent', () => {
  let component: BioptimizersComponent;
  let fixture: ComponentFixture<BioptimizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioptimizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioptimizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
