import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUserAddComponent } from './channel-user-add.component';

describe('ChannelUserAddComponent', () => {
  let component: ChannelUserAddComponent;
  let fixture: ComponentFixture<ChannelUserAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelUserAddComponent]
    });
    fixture = TestBed.createComponent(ChannelUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
