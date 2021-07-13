import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAskerComponent } from './form-asker.component';

describe('FormAskerComponent', () => {
  let component: FormAskerComponent;
  let fixture: ComponentFixture<FormAskerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAskerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
