import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelModifyNameComponent } from './channel-modify-name.component';

describe('ChannelModifyNameComponent', () => {
  let component: ChannelModifyNameComponent;
  let fixture: ComponentFixture<ChannelModifyNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelModifyNameComponent]
    });
    fixture = TestBed.createComponent(ChannelModifyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
