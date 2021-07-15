import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggProductosComponent } from './agg-productos.component';

describe('AggProductosComponent', () => {
  let component: AggProductosComponent;
  let fixture: ComponentFixture<AggProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
