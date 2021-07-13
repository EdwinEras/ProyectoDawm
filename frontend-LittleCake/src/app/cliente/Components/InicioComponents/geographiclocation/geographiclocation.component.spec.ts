import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographiclocationComponent } from './geographiclocation.component';

describe('GeographiclocationComponent', () => {
  let component: GeographiclocationComponent;
  let fixture: ComponentFixture<GeographiclocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographiclocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographiclocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
