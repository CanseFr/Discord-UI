import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBadgeOptionComponent } from './main-badge-option.component';

describe('MainBadgeOptionComponent', () => {
  let component: MainBadgeOptionComponent;
  let fixture: ComponentFixture<MainBadgeOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBadgeOptionComponent]
    });
    fixture = TestBed.createComponent(MainBadgeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
