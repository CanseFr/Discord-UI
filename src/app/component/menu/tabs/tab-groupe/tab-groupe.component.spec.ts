import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupeComponent } from './tab-groupe.component';

describe('TabGroupeComponent', () => {
  let component: TabGroupeComponent;
  let fixture: ComponentFixture<TabGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupeComponent]
    });
    fixture = TestBed.createComponent(TabGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
