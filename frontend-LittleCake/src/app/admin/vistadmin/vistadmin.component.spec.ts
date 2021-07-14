import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadminComponent } from './vistadmin.component';

describe('VistadminComponent', () => {
  let component: VistadminComponent;
  let fixture: ComponentFixture<VistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
