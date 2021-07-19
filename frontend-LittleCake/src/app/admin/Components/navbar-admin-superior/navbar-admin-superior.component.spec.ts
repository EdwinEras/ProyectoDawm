import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminSuperiorComponent } from './navbar-admin-superior.component';

describe('NavbarAdminSuperiorComponent', () => {
  let component: NavbarAdminSuperiorComponent;
  let fixture: ComponentFixture<NavbarAdminSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdminSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
