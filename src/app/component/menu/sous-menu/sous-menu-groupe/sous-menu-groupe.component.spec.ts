import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuGroupeComponent } from './sous-menu-groupe.component';

describe('SousMenuGroupeComponent', () => {
  let component: SousMenuGroupeComponent;
  let fixture: ComponentFixture<SousMenuGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousMenuGroupeComponent]
    });
    fixture = TestBed.createComponent(SousMenuGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
