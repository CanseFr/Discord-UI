import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionProfilInfopersoComponent } from './option-profil-infoperso.component';

describe('OptionProfilInfopersoComponent', () => {
  let component: OptionProfilInfopersoComponent;
  let fixture: ComponentFixture<OptionProfilInfopersoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionProfilInfopersoComponent]
    });
    fixture = TestBed.createComponent(OptionProfilInfopersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
