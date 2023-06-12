import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddUserComponent } from './user-add-user.component';

describe('UserAddUserComponent', () => {
  let component: UserAddUserComponent;
  let fixture: ComponentFixture<UserAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddUserComponent]
    });
    fixture = TestBed.createComponent(UserAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
