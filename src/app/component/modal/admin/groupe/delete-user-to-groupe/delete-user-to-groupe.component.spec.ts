import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserToGroupeComponent } from './delete-user-to-groupe.component';

describe('DeleteUserToGroupeComponent', () => {
  let component: DeleteUserToGroupeComponent;
  let fixture: ComponentFixture<DeleteUserToGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserToGroupeComponent]
    });
    fixture = TestBed.createComponent(DeleteUserToGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
