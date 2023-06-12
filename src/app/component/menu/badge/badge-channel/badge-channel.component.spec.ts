import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeChannelComponent } from './badge-channel.component';

describe('BadgeChannelComponent', () => {
  let component: BadgeChannelComponent;
  let fixture: ComponentFixture<BadgeChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeChannelComponent]
    });
    fixture = TestBed.createComponent(BadgeChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
