import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupeToChannelComponent } from './add-groupe-to-channel.component';

describe('AddGroupeToChannelComponent', () => {
  let component: AddGroupeToChannelComponent;
  let fixture: ComponentFixture<AddGroupeToChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGroupeToChannelComponent]
    });
    fixture = TestBed.createComponent(AddGroupeToChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
