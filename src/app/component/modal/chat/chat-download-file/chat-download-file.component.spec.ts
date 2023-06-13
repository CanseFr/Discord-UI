import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDownloadFileComponent } from './chat-download-file.component';

describe('ChatDownloadFileComponent', () => {
  let component: ChatDownloadFileComponent;
  let fixture: ComponentFixture<ChatDownloadFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatDownloadFileComponent]
    });
    fixture = TestBed.createComponent(ChatDownloadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
