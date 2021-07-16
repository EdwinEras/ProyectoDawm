import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggVentasComponent } from './agg-ventas.component';

describe('AggVentasComponent', () => {
  let component: AggVentasComponent;
  let fixture: ComponentFixture<AggVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
