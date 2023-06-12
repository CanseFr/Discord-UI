import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionProfilPasswordComponent } from './option-profil-password.component';

describe('OptionProfilPasswordComponent', () => {
  let component: OptionProfilPasswordComponent;
  let fixture: ComponentFixture<OptionProfilPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionProfilPasswordComponent]
    });
    fixture = TestBed.createComponent(OptionProfilPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
