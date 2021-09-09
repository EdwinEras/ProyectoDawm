import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggCategoriaComponent } from './agg-categoria.component';

describe('AggCategoriaComponent', () => {
  let component: AggCategoriaComponent;
  let fixture: ComponentFixture<AggCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
