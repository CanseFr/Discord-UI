import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeGroupeComponent } from './badge-groupe.component';

describe('BadgeGroupeComponent', () => {
  let component: BadgeGroupeComponent;
  let fixture: ComponentFixture<BadgeGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeGroupeComponent]
    });
    fixture = TestBed.createComponent(BadgeGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
