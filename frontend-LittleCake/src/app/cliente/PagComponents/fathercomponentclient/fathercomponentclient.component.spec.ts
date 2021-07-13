import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathercomponentclientComponent } from './fathercomponentclient.component';

describe('FathercomponentclientComponent', () => {
  let component: FathercomponentclientComponent;
  let fixture: ComponentFixture<FathercomponentclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FathercomponentclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FathercomponentclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
