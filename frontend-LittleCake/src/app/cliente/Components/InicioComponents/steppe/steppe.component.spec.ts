import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppeComponent } from './steppe.component';

describe('SteppeComponent', () => {
  let component: SteppeComponent;
  let fixture: ComponentFixture<SteppeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
