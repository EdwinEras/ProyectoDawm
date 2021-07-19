import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosVentasComponent } from './graficos-ventas.component';

describe('GraficosVentasComponent', () => {
  let component: GraficosVentasComponent;
  let fixture: ComponentFixture<GraficosVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
