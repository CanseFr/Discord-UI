import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDocumentComponent } from './badge-document.component';

describe('BadgeDocumentComponent', () => {
  let component: BadgeDocumentComponent;
  let fixture: ComponentFixture<BadgeDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeDocumentComponent]
    });
    fixture = TestBed.createComponent(BadgeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
