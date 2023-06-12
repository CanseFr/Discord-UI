import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuOptionComponent } from './admin-menu-option.component';

describe('AdminMenuOptionComponent', () => {
  let component: AdminMenuOptionComponent;
  let fixture: ComponentFixture<AdminMenuOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMenuOptionComponent]
    });
    fixture = TestBed.createComponent(AdminMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
