import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroupeComponent } from './delete-groupe.component';

describe('DeleteGroupeComponent', () => {
  let component: DeleteGroupeComponent;
  let fixture: ComponentFixture<DeleteGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGroupeComponent]
    });
    fixture = TestBed.createComponent(DeleteGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
