import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifyUserComponent } from './user-modify-user.component';

describe('UserModifyUserComponent', () => {
  let component: UserModifyUserComponent;
  let fixture: ComponentFixture<UserModifyUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserModifyUserComponent]
    });
    fixture = TestBed.createComponent(UserModifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
