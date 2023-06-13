import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUserDeleteComponent } from './channel-user-delete.component';

describe('ChannelUserDeleteComponent', () => {
  let component: ChannelUserDeleteComponent;
  let fixture: ComponentFixture<ChannelUserDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelUserDeleteComponent]
    });
    fixture = TestBed.createComponent(ChannelUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
