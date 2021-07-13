import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaComponentComponent } from './tienda-component.component';

describe('TiendaComponentComponent', () => {
  let component: TiendaComponentComponent;
  let fixture: ComponentFixture<TiendaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
