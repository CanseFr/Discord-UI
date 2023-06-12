import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteUserComponent } from './user-delete-user.component';

describe('UserDeleteUserComponent', () => {
  let component: UserDeleteUserComponent;
  let fixture: ComponentFixture<UserDeleteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDeleteUserComponent]
    });
    fixture = TestBed.createComponent(UserDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
