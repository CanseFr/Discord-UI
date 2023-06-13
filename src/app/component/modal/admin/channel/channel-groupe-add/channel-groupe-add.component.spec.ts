import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelGroupeAddComponent } from './channel-groupe-add.component';

describe('ChannelGroupeAddComponent', () => {
  let component: ChannelGroupeAddComponent;
  let fixture: ComponentFixture<ChannelGroupeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelGroupeAddComponent]
    });
    fixture = TestBed.createComponent(ChannelGroupeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
