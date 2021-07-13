import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTestimonioComponent } from './card-testimonio.component';

describe('CardTestimonioComponent', () => {
  let component: CardTestimonioComponent;
  let fixture: ComponentFixture<CardTestimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTestimonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
