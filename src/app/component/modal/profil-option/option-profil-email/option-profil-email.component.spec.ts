import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionProfilEmailComponent } from './option-profil-email.component';

describe('OptionProfilEmailComponent', () => {
  let component: OptionProfilEmailComponent;
  let fixture: ComponentFixture<OptionProfilEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionProfilEmailComponent]
    });
    fixture = TestBed.createComponent(OptionProfilEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
