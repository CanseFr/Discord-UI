import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuChannelComponent } from './sous-menu-channel.component';

describe('SousMenuChannelComponent', () => {
  let component: SousMenuChannelComponent;
  let fixture: ComponentFixture<SousMenuChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousMenuChannelComponent]
    });
    fixture = TestBed.createComponent(SousMenuChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
