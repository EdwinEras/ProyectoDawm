import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathercomponentadminComponent } from './fathercomponentadmin.component';

describe('FathercomponentadminComponent', () => {
  let component: FathercomponentadminComponent;
  let fixture: ComponentFixture<FathercomponentadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FathercomponentadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FathercomponentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
