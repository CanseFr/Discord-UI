import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelGroupeDeleteComponent } from './channel-groupe-delete.component';

describe('ChannelGroupeDeleteComponent', () => {
  let component: ChannelGroupeDeleteComponent;
  let fixture: ComponentFixture<ChannelGroupeDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelGroupeDeleteComponent]
    });
    fixture = TestBed.createComponent(ChannelGroupeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
