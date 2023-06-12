import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChannelComponent } from './tab-channel.component';

describe('TabChannelComponent', () => {
  let component: TabChannelComponent;
  let fixture: ComponentFixture<TabChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabChannelComponent]
    });
    fixture = TestBed.createComponent(TabChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
