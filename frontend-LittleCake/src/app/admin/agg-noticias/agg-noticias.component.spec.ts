import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggNoticiasComponent } from './agg-noticias.component';

describe('AggNoticiasComponent', () => {
  let component: AggNoticiasComponent;
  let fixture: ComponentFixture<AggNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
