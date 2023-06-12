import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImportUserComponent } from './user-import-user.component';

describe('UserImportUserComponent', () => {
  let component: UserImportUserComponent;
  let fixture: ComponentFixture<UserImportUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserImportUserComponent]
    });
    fixture = TestBed.createComponent(UserImportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
