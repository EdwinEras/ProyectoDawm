import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudnoticiaComponent } from './crudnoticia.component';

describe('CrudnoticiaComponent', () => {
  let component: CrudnoticiaComponent;
  let fixture: ComponentFixture<CrudnoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudnoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
