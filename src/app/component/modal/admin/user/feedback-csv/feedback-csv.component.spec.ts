import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCsvComponent } from './feedback-csv.component';

describe('FeedbackCsvComponent', () => {
  let component: FeedbackCsvComponent;
  let fixture: ComponentFixture<FeedbackCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackCsvComponent]
    });
    fixture = TestBed.createComponent(FeedbackCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
