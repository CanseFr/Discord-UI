import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGroupeComponent } from './modify-groupe.component';

describe('ModifyGroupeComponent', () => {
  let component: ModifyGroupeComponent;
  let fixture: ComponentFixture<ModifyGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyGroupeComponent]
    });
    fixture = TestBed.createComponent(ModifyGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
