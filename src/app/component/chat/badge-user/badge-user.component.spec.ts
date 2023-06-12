import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeUserComponent } from './badge-user.component';

describe('BadgeUserComponent', () => {
  let component: BadgeUserComponent;
  let fixture: ComponentFixture<BadgeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeUserComponent]
    });
    fixture = TestBed.createComponent(BadgeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
