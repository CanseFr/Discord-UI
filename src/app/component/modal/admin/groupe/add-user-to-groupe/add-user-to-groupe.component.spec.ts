import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToGroupeComponent } from './add-user-to-groupe.component';

describe('AddUserToGroupeComponent', () => {
  let component: AddUserToGroupeComponent;
  let fixture: ComponentFixture<AddUserToGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserToGroupeComponent]
    });
    fixture = TestBed.createComponent(AddUserToGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
