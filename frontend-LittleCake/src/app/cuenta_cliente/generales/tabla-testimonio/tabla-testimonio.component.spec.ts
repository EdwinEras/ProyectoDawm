import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTestimonioComponent } from './tabla-testimonio.component';

describe('TablaTestimonioComponent', () => {
  let component: TablaTestimonioComponent;
  let fixture: ComponentFixture<TablaTestimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTestimonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
